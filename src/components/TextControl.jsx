/**
 * Labeled text input component for collecting user text input.
 *
 * Mirrors the WordPress `TextControl` component from `@wordpress/components`.
 *
 * @param {Object}   props
 * @param {string}   props.label          - Label text for the input.
 * @param {string}   props.value          - Current value of the input (controlled).
 * @param {Function} props.onChange       - Callback fired with the new string value on change.
 * @param {string}   [props.help]         - Optional help text displayed below the input.
 * @param {string}   [props.placeholder]  - Placeholder text when the input is empty.
 * @param {string}   [props.type]         - HTML input type. Default 'text'.
 * @param {boolean}  [props.disabled]     - Whether the input is disabled.
 * @param {string}   [props.className]    - Additional CSS class names.
 * @param {string}   [props.autoComplete] - HTML autocomplete attribute.
 */
export default function TextControl( {
	label,
	value,
	onChange,
	help,
	placeholder,
	type = 'text',
	disabled = false,
	className = '',
	autoComplete,
	...rest
} ) {
	const id = `text-${ label?.toLowerCase().replace( /\s+/g, '-' ) }`;

	const handleChange = ( event ) => {
		if ( ! disabled && onChange ) {
			onChange( event.target.value );
		}
	};

	return (
		<div className={ `text-control${ className ? ` ${ className }` : '' }${ disabled ? ' text-control--disabled' : '' }` }>
			<label className="text-control__label" htmlFor={ id }>
				{ label }
			</label>
			<input
				id={ id }
				type={ type }
				className="text-control__input"
				value={ value }
				onChange={ handleChange }
				placeholder={ placeholder }
				disabled={ disabled }
				autoComplete={ autoComplete }
				aria-describedby={ help ? `${ id }-help` : undefined }
				{ ...rest }
			/>
			{ help && (
				<p id={ `${ id }-help` } className="text-control__help">
					{ help }
				</p>
			) }
		</div>
	);
}
