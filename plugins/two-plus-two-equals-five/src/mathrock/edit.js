import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import './editor.scss';

/**
 * Keys that are always permitted in the integer input regardless of value.
 */
const PASSTHROUGH_KEYS = [
	'Backspace', 'Delete', 'Tab',
	'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
	'Home', 'End',
];

/**
 * A controlled input that only accepts whole-number keystrokes.
 *
 * @param {Object}   props          - Component props.
 * @param {number}   props.value    - Current integer value.
 * @param {string}   props.label    - Accessible label.
 * @param {boolean}  props.disabled - Whether the input is locked.
 * @param {Function} props.onChange - Called with the new integer value.
 * @return {JSX.Element} Integer input element.
 */
function IntegerInput( { value, label, disabled, onChange } ) {
	/**
	 * Block any keypress that is not a digit or a navigation/editing key.
	 *
	 * @param {KeyboardEvent} e
	 */
	const handleKeyDown = ( e ) => {
		if ( disabled ) {
			e.preventDefault();
			return;
		}
		if ( PASSTHROUGH_KEYS.includes( e.key ) ) {
			return;
		}
		if ( /^\d$/.test( e.key ) ) {
			return;
		}
		e.preventDefault();
	};

	return (
		<input
			type="number"
			className={ `mathrock__input${ disabled ? ' mathrock__input--locked' : '' }` }
			value={ value }
			aria-label={ label }
			disabled={ disabled }
			onKeyDown={ handleKeyDown }
			onChange={ ( e ) => {
				const parsed = parseInt( e.target.value, 10 );
				onChange( isNaN( parsed ) ? 0 : parsed );
			} }
		/>
	);
}

/**
 * The edit component for Math Rock.
 *
 * Renders two integer inputs directly in the block canvas. The equation
 * and its result update in real time as the user types. A sidebar toggle
 * locks the inputs to their current values.
 *
 * @param {Object}   props               - Block props.
 * @param {Object}   props.attributes    - Block attributes.
 * @param {Function} props.setAttributes - Attribute setter.
 * @return {JSX.Element} Block editor UI.
 */
export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps( { className: 'mathrock' } );
	const { num1, num2, locked } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'flexy_plugins' ) }>
					<ToggleControl
						label={ __( 'Lock values', 'flexy_plugins' ) }
						help={
							locked
								? __( 'Inputs are locked. Toggle to edit.', 'flexy_plugins' )
								: __( 'Toggle to lock the current values.', 'flexy_plugins' )
						}
						checked={ locked }
						onChange={ ( val ) => setAttributes( { locked: val } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<IntegerInput
					value={ num1 }
					label={ __( 'First number', 'flexy_plugins' ) }
					disabled={ locked }
					onChange={ ( val ) => setAttributes( { num1: val } ) }
				/>
				<span className="mathrock__operator">+</span>
				<IntegerInput
					value={ num2 }
					label={ __( 'Second number', 'flexy_plugins' ) }
					disabled={ locked }
					onChange={ ( val ) => setAttributes( { num2: val } ) }
				/>
				<span className="mathrock__equals">=</span>
				<span className="mathrock__result">{ num1 + num2 }</span>
			</div>
		</>
	);
}
