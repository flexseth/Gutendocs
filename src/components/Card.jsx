/**
 * Card container component with optional title.
 *
 * @param {Object}  props
 * @param {string}  props.title    - Card heading.
 * @param {React.ReactNode} props.children - Card body content.
 */
export default function Card( { title, children } ) {
	return (
		<div className="card">
			{ title && <div className="card__header">{ title }</div> }
			<div className="card__body">{ children }</div>
		</div>
	);
}
