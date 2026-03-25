import { BLOCK_SUPPORTS_GROUPS } from '../../data/blockSupportsOptions';

/**
 * Sets a deeply-nested value in an object using a dot-notation key.
 *
 * @param {Object} obj   - The source object.
 * @param {string} path  - Dot-notation path (e.g. 'color.background').
 * @param {*}      value - Value to set.
 * @return {Object} New object with the value set.
 */
function setNestedValue( obj, path, value ) {
	const keys = path.split( '.' );
	if ( keys.length === 1 ) {
		return { ...obj, [ keys[ 0 ] ]: value };
	}
	return {
		...obj,
		[ keys[ 0 ] ]: setNestedValue( obj[ keys[ 0 ] ] ?? {}, keys.slice( 1 ).join( '.' ), value ),
	};
}

/**
 * Gets a deeply-nested value from an object using a dot-notation key.
 *
 * @param {Object} obj  - The source object.
 * @param {string} path - Dot-notation path.
 * @return {*}
 */
function getNestedValue( obj, path ) {
	return path.split( '.' ).reduce( ( acc, key ) => acc?.[ key ], obj );
}

/**
 * Grouped checkboxes editor for all block supports flags.
 *
 * @param {Object}   props
 * @param {Object}   props.supports  - The block supports object.
 * @param {Function} props.onChange  - Called with updated supports object.
 */
export default function SupportsEditor( { supports = {}, onChange } ) {
	function toggle( key, checked ) {
		onChange( setNestedValue( supports, key, checked ) );
	}

	return (
		<div className="iface-supports-grid">
			{ BLOCK_SUPPORTS_GROUPS.map( ( group ) => (
				<div key={ group.label }>
					<p className="iface-supports-group__label">{ group.label }</p>
					<div className="iface-supports-group__options">
						{ group.options.map( ( opt ) => {
							const checked = !! getNestedValue( supports, opt.key );
							return (
								<label key={ opt.key } className="iface-supports-option">
									<input
										type="checkbox"
										checked={ checked }
										onChange={ ( e ) => toggle( opt.key, e.target.checked ) }
									/>
									{ opt.label }
								</label>
							);
						} ) }
					</div>
				</div>
			) ) }
		</div>
	);
}
