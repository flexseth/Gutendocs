/**
 * Renders a props documentation table from structured data.
 *
 * @param {Object}   props
 * @param {Array}    props.props - Array of prop definitions.
 * @param {string}   props.props[].name - Prop name.
 * @param {string}   props.props[].type - Prop type (e.g. 'string', 'boolean').
 * @param {string}   props.props[].default - Default value.
 * @param {string}   props.props[].description - What the prop does.
 * @param {boolean}  props.props[].required - Whether the prop is required.
 */
export default function PropsTable( { props: propDefs = [] } ) {
	return (
		<div className="props-table-wrapper">
			<table className="props-table">
				<thead>
					<tr>
						<th>Prop</th>
						<th>Type</th>
						<th>Default</th>
						<th>Required</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{ propDefs.map( ( prop ) => (
						<tr key={ prop.name }>
							<td><code>{ prop.name }</code></td>
							<td><code>{ prop.type }</code></td>
							<td>{ prop.default ? <code>{ prop.default }</code> : '\u2014' }</td>
							<td>{ prop.required ? 'Yes' : 'No' }</td>
							<td>{ prop.description }</td>
						</tr>
					) ) }
				</tbody>
			</table>
		</div>
	);
}
