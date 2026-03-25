/**
 * Generates an edit.js file content string for a given block.
 *
 * @param {Object} block  - The block model.
 * @param {Object} plugin - The plugin model.
 * @return {string} Formatted edit.js content.
 */
export function generateEditJs( block, plugin ) {
	const { editorBehavior = {}, attributes = [] } = block;
	const textDomain = plugin.textDomain || plugin.slug || 'my-plugin';

	const imports = [ `import { __ } from '@wordpress/i18n';` ];
	const blockEditorImports = [ 'useBlockProps' ];

	if ( editorBehavior.usesRichText ) blockEditorImports.push( 'RichText' );
	if ( editorBehavior.usesInnerBlocks ) blockEditorImports.push( 'InnerBlocks' );
	if ( editorBehavior.usesMediaUpload ) blockEditorImports.push( 'MediaUpload' );
	if ( editorBehavior.usesInspectorPanel ) blockEditorImports.push( 'InspectorControls' );
	if ( editorBehavior.usesBlockControls ) blockEditorImports.push( 'BlockControls' );

	imports.push(
		`import { ${ blockEditorImports.join( ', ' ) } } from '@wordpress/block-editor';`
	);

	if ( editorBehavior.usesInspectorPanel ) {
		imports.push( `import { PanelBody } from '@wordpress/components';` );
	}

	const attrNames = attributes.map( ( a ) => a.name ).filter( Boolean );
	const destructured =
		attrNames.length > 0 ? `\tconst { ${ attrNames.join( ', ' ) } } = attributes;` : '';

	const inspectorPanel = editorBehavior.usesInspectorPanel
		? `\t\t\t<InspectorControls>
\t\t\t\t<PanelBody title={ __( 'Settings', '${ textDomain }' ) }>
\t\t\t\t\t{ /* Add controls here */ }
\t\t\t\t</PanelBody>
\t\t\t</InspectorControls>`
		: '';

	const blockControls = editorBehavior.usesBlockControls
		? `\t\t\t<BlockControls>
\t\t\t\t{ /* Add toolbar controls here */ }
\t\t\t</BlockControls>`
		: '';

	const innerContent = editorBehavior.usesInnerBlocks
		? `\t\t\t<InnerBlocks />`
		: `\t\t\t{ /* Block content */ }`;

	return `${ imports.join( '\n' ) }
import './editor.scss';

/**
 * The edit component for ${ block.title || block.name }.
 *
 * @param {Object} props            - Block props.
 * @param {Object} props.attributes - Block attributes.
 * @param {Function} props.setAttributes - Attribute setter.
 * @return {JSX.Element} Block editor UI.
 */
export default function Edit( { attributes, setAttributes } ) {
\tconst blockProps = useBlockProps();
${ destructured }

\treturn (
\t\t<>
${ inspectorPanel }
${ blockControls }
\t\t\t<div { ...blockProps }>
${ innerContent }
\t\t\t</div>
\t\t</>
\t);
}
`;
}
