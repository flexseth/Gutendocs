import AttributeRow from './AttributeRow';

/**
 * Dynamic list editor for block.json attributes.
 *
 * @param {Object}   props
 * @param {Array}    props.attributes - Array of attribute models.
 * @param {Function} props.onChange   - Called with updated attributes array.
 */
export default function AttributeBuilder( { attributes = [], onChange } ) {
	function addAttribute() {
		onChange( [
			...attributes,
			{
				id: crypto.randomUUID(),
				name: '',
				type: 'string',
				default: '',
				source: 'none',
				selector: '',
			},
		] );
	}

	function updateAttribute( id, updated ) {
		onChange( attributes.map( ( a ) => ( a.id === id ? updated : a ) ) );
	}

	function deleteAttribute( id ) {
		onChange( attributes.filter( ( a ) => a.id !== id ) );
	}

	return (
		<div className="iface-attr-builder">
			{ attributes.length > 0 && (
				<div className="iface-attr-builder__header">
					<span>Name</span>
					<span>Type</span>
					<span>Default</span>
					<span>Source</span>
					<span></span>
				</div>
			) }
			{ attributes.map( ( attr ) => (
				<AttributeRow
					key={ attr.id }
					attribute={ attr }
					onChange={ ( updated ) => updateAttribute( attr.id, updated ) }
					onDelete={ () => deleteAttribute( attr.id ) }
				/>
			) ) }
			<div>
				<button
					type="button"
					className="iface-btn iface-btn--secondary iface-btn--sm"
					onClick={ addAttribute }
				>
					+ Add Attribute
				</button>
			</div>
		</div>
	);
}
