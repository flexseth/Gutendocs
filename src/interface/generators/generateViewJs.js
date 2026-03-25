/**
 * Generates a view.js file for a block that uses front-end interactivity.
 *
 * @param {Object} block  - The block model.
 * @param {Object} plugin - The plugin model.
 * @return {string} Formatted view.js content.
 */
export function generateViewJs( block, plugin ) {
	const namespace = plugin.namespace || plugin.slug || 'my-plugin';
	const blockName = block.name || 'my-block';

	return `/**
 * Front-end view script for the ${ block.title || blockName } block.
 *
 * Runs after DOMContentLoaded. Selects all instances of this block
 * on the page and initialises any interactive behaviour.
 */
document.addEventListener( 'DOMContentLoaded', () => {
\tconst blocks = document.querySelectorAll(
\t\t'[data-block="${ namespace }/${ blockName }"]'
\t);

\tblocks.forEach( ( el ) => {
\t\t// Initialise block interactivity here.
\t} );
} );
`;
}
