/**
 * Generates a block.json file content string for a given block.
 *
 * @param {Object} block  - The block model.
 * @param {Object} plugin - The plugin model.
 * @return {string} Formatted block.json content.
 */
export function generateBlockJson( block, plugin ) {
	const namespace = plugin.namespace || plugin.slug || 'my-plugin';
	const blockName = block.name || 'my-block';

	// Build the attributes object from the array.
	const attributes = {};
	( block.attributes || [] ).forEach( ( attr ) => {
		if ( ! attr.name ) return;
		const entry = { type: attr.type || 'string' };
		if ( attr.default !== '' && attr.default !== undefined ) {
			entry.default = attr.default;
		}
		if ( attr.source && attr.source !== 'none' ) {
			entry.source = attr.source;
			if ( attr.selector ) {
				entry.selector = attr.selector;
			}
		}
		attributes[ attr.name ] = entry;
	} );

	const blockJson = {
		$schema: 'https://schemas.wp.org/trunk/block.json',
		apiVersion: 3,
		name: `${ namespace }/${ blockName }`,
		version: plugin.version || '1.0.0',
		title: block.title || blockName,
		category: block.category || 'text',
		icon: block.icon || 'smiley',
		description: block.description || '',
		keywords: block.keywords || [],
		textdomain: plugin.textDomain || namespace,
		editorScript: 'file:./index.js',
	};

	if ( Object.keys( attributes ).length > 0 ) {
		blockJson.attributes = attributes;
	}

	if ( block.supports && Object.keys( block.supports ).length > 0 ) {
		blockJson.supports = block.supports;
	}

	if ( block.editorStyle ) {
		blockJson.editorStyle = 'file:./index.css';
	}

	if ( block.style ) {
		blockJson.style = 'file:./style-index.css';
	}

	if ( block.viewScript ) {
		blockJson.viewScript = 'file:./view.js';
	}

	return JSON.stringify( blockJson, null, '\t' );
}
