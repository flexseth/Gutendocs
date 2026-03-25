import { ATTRIBUTE_TYPES, ATTRIBUTE_SOURCES } from '../../data/attributeTypes';

/**
 * Single attribute row in the attribute builder.
 *
 * @param {Object}   props
 * @param {Object}   props.attribute - The attribute model.
 * @param {Function} props.onChange  - Called with updated attribute.
 * @param {Function} props.onDelete  - Called to delete this row.
 */
export default function AttributeRow( { attribute, onChange, onDelete } ) {
	function update( field, value ) {
		onChange( { ...attribute, [ field ]: value } );
	}

	return (
		<div className="iface-attr-row">
			<input
				type="text"
				value={ attribute.name }
				onChange={ ( e ) => update( 'name', e.target.value ) }
				placeholder="name"
				aria-label="Attribute name"
			/>
			<select
				value={ attribute.type }
				onChange={ ( e ) => update( 'type', e.target.value ) }
				aria-label="Attribute type"
			>
				{ ATTRIBUTE_TYPES.map( ( t ) => (
					<option key={ t } value={ t }>
						{ t }
					</option>
				) ) }
			</select>
			<input
				type="text"
				value={ attribute.default }
				onChange={ ( e ) => update( 'default', e.target.value ) }
				placeholder="default value"
				aria-label="Default value"
			/>
			<select
				value={ attribute.source }
				onChange={ ( e ) => update( 'source', e.target.value ) }
				aria-label="Attribute source"
			>
				{ ATTRIBUTE_SOURCES.map( ( s ) => (
					<option key={ s } value={ s }>
						{ s }
					</option>
				) ) }
			</select>
			<button
				type="button"
				className="iface-btn iface-btn--danger iface-btn--sm"
				onClick={ onDelete }
				aria-label="Remove attribute"
			>
				✕
			</button>
		</div>
	);
}
