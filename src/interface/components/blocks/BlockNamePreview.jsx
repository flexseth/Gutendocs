/**
 * Live preview of the full block name (namespace/name).
 *
 * @param {Object} props
 * @param {string} props.namespace - Plugin namespace/slug.
 * @param {string} props.blockName - Block name.
 */
export default function BlockNamePreview( { namespace, blockName } ) {
	const ns = namespace || 'my-plugin';
	const name = blockName || 'my-block';

	return (
		<span className="iface-block-name-preview">
			{ ns }/{ name }
		</span>
	);
}
