/**
 * Slider component for selecting numeric values within a range.
 *
 * Mirrors the WordPress `RangeControl` component from `@wordpress/components`.
 *
 * @param {Object}   props
 * @param {string}   props.label               - Label text for the control.
 * @param {number}   props.value               - Current numeric value (controlled).
 * @param {Function} props.onChange            - Callback fired with the new number on change.
 * @param {number}   [props.min]               - Minimum allowed value. Default 0.
 * @param {number}   [props.max]               - Maximum allowed value. Default 100.
 * @param {number}   [props.step]              - Step increment. Default 1.
 * @param {string}   [props.help]              - Optional help text displayed below the control.
 * @param {boolean}  [props.disabled]          - Whether the control is disabled.
 * @param {string}   [props.className]         - Additional CSS class names.
 * @param {boolean}  [props.withInputField]    - Show a numeric input alongside the slider. Default true.
 */
export default function RangeControl( {
	label,
	value,
	onChange,
	min = 0,
	max = 100,
	step = 1,
	help,
	disabled = false,
	className = '',
	withInputField = true,
} ) {
	const id = `range-${ label?.toLowerCase().replace( /\s+/g, '-' ) }`;

	const handleChange = ( event ) => {
		if ( ! disabled && onChange ) {
			onChange( Number( event.target.value ) );
		}
	};

	return (
		<div className={ `range-control${ className ? ` ${ className }` : '' }${ disabled ? ' range-control--disabled' : '' }` }>
			<div className="range-control__header">
				<label className="range-control__label" htmlFor={ id }>
					{ label }
				</label>
				{ withInputField && (
					<input
						type="number"
						className="range-control__input"
						value={ value }
						min={ min }
						max={ max }
						step={ step }
						disabled={ disabled }
						onChange={ handleChange }
						aria-label={ `${ label } value` }
					/>
				) }
			</div>
			<input
				id={ id }
				type="range"
				className="range-control__slider"
				value={ value }
				min={ min }
				max={ max }
				step={ step }
				disabled={ disabled }
				onChange={ handleChange }
				aria-describedby={ help ? `${ id }-help` : undefined }
			/>
			<div className="range-control__limits" aria-hidden="true">
				<span>{ min }</span>
				<span>{ max }</span>
			</div>
			{ help && (
				<p id={ `${ id }-help` } className="range-control__help">
					{ help }
				</p>
			) }
		</div>
	);
}
