/**
 * Generates the index.js entry point for a block.
 *
 * This is the file that `@wordpress/scripts build` compiles.
 * It imports block.json metadata, the Edit component, and the Save
 * component, then calls registerBlockType() to wire everything up.
 *
 * @param {Object} block  - The block model.
 * @param {Object} plugin - The plugin model (unused, reserved).
 * @return {string} Formatted index.js content.
 */
export function generateIndexJs( block, plugin ) { // eslint-disable-line no-unused-vars
	const blockName = block.name || 'my-block';
	const title = block.title || blockName;

	return `import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';
import Edit from './edit';
import save from './save';

/**
 * Register the ${ title } block.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	edit: Edit,
	save,
} );
`;
}
