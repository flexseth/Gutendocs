/**
 * Creates a new block object with default values.
 *
 * @return {Object} A blank block model.
 */
export function createBlock() {
	return {
		id: crypto.randomUUID(),
		name: '',
		title: '',
		description: '',
		category: 'text',
		icon: 'smiley',
		keywords: [],
		attributes: [],
		supports: {
			anchor: false,
			align: false,
			alignWide: true,
			className: true,
			customClassName: true,
			html: false,
			inserter: true,
			multiple: true,
			reusable: true,
			color: {
				background: true,
				text: true,
				link: false,
			},
			spacing: {
				margin: false,
				padding: false,
				blockGap: false,
			},
			typography: {
				fontSize: false,
				lineHeight: false,
			},
		},
		editorBehavior: {
			usesRichText: false,
			usesInnerBlocks: false,
			innerBlocksAllowed: [],
			usesMediaUpload: false,
			usesInspectorPanel: true,
			usesBlockControls: false,
		},
		viewScript: false,
		style: true,
		editorStyle: true,
	};
}
