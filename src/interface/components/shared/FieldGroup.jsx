/**
 * Labeled form field wrapper with optional help text.
 *
 * @param {Object}          props
 * @param {string}          props.label     - Field label text.
 * @param {string}          [props.help]    - Optional help/description text.
 * @param {boolean}         [props.required] - Shows required asterisk.
 * @param {string}          [props.htmlFor] - ID of the associated input for the label.
 * @param {React.ReactNode} props.children  - The input element(s).
 * @param {string}          [props.className] - Additional class for the wrapper.
 */
export default function FieldGroup( {
	label,
	help,
	required = false,
	htmlFor,
	children,
	className = '',
} ) {
	return (
		<div className={ `iface-field-group ${ className }`.trim() }>
			<label
				className={ `iface-field-group__label${ required ? ' iface-field-group__label--required' : '' }` }
				htmlFor={ htmlFor }
			>
				{ label }
			</label>
			<div className="iface-field-group__input">{ children }</div>
			{ help && <p className="iface-field-group__help">{ help }</p> }
		</div>
	);
}
