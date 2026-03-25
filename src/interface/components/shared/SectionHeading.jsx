/**
 * Section heading with optional description and action slot.
 *
 * @param {Object}          props
 * @param {string}          props.title       - Heading text.
 * @param {string}          [props.description] - Optional sub-description.
 * @param {React.ReactNode} [props.action]    - Optional action element (e.g. a button).
 */
export default function SectionHeading( { title, description, action } ) {
	return (
		<div className="iface-section-heading">
			<div>
				<h2>{ title }</h2>
				{ description && <p>{ description }</p> }
			</div>
			{ action && <div>{ action }</div> }
		</div>
	);
}
