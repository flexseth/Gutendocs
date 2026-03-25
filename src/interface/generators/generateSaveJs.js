/**
 * Generates a save.js file content string for a given block.
 *
 * @param {Object} block  - The block model.
 * @param {Object} plugin - The plugin model (unused currently, reserved).
 * @return {string} Formatted save.js content.
 */
export function generateSaveJs( block, plugin ) { // eslint-disable-line no-unused-vars
	const { editorBehavior = {}, attributes = [] } = block;

	const blockEditorImports = [ 'useBlockProps' ];
	if ( editorBehavior.usesRichText ) blockEditorImports.push( 'RichText' );
	if ( editorBehavior.usesInnerBlocks ) blockEditorImports.push( 'InnerBlocks' );

	const attrNames = attributes.map( ( a ) => a.name ).filter( Boolean );
	const destructured =
		attrNames.length > 0 ? `\tconst { ${ attrNames.join( ', ' ) } } = attributes;` : '';

	const innerContent = editorBehavior.usesInnerBlocks
		? `\t\t\t<InnerBlocks.Content />`
		: `\t\t\t{ /* Saved content */ }`;

	return `import { useBlockProps } from '@wordpress/block-editor';
${ blockEditorImports.includes( 'RichText' ) ? `import { RichText } from '@wordpress/block-editor';` : '' }

/**
 * The save component for ${ block.title || block.name }.
 *
 * @param {Object} props            - Block props.
 * @param {Object} props.attributes - Block attributes.
 * @return {JSX.Element} Saved block markup.
 */
export default function save( { attributes } ) {
\tconst blockProps = useBlockProps.save();
${ destructured }

\treturn (
\t\t<div { ...blockProps }>
${ innerContent }
\t\t</div>
\t);
}
`;
}
