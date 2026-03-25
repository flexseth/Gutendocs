/**
 * Converts a human-readable name to a WordPress-style slug.
 *
 * @param {string} name
 * @return {string}
 */
function toSlug( name ) {
	return name
		.toLowerCase()
		.replace( /[^a-z0-9\s-]/g, '' )
		.trim()
		.replace( /\s+/g, '-' );
}

/**
 * Live slug preview derived from a plugin name.
 *
 * @param {Object} props
 * @param {string} props.name - The plugin name to convert.
 */
export default function PluginSlugPreview( { name } ) {
	const slug = toSlug( name || '' ) || 'my-plugin';

	return (
		<div className="iface-slug-preview">
			<span className="iface-slug-preview__label">Slug:</span>
			<strong>{ slug }</strong>
		</div>
	);
}

export { toSlug };
