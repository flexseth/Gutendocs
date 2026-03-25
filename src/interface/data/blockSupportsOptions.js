/**
 * WordPress block supports options grouped by category.
 *
 * Each group contains a label and an array of support flags.
 * Nested supports (e.g. color.background) use dot notation for the key.
 */
export const BLOCK_SUPPORTS_GROUPS = [
	{
		label: 'Behavior',
		options: [
			{ key: 'anchor', label: 'Anchor', defaultValue: false },
			{ key: 'html', label: 'Custom HTML editing', defaultValue: false },
			{ key: 'multiple', label: 'Multiple instances', defaultValue: true },
			{ key: 'reusable', label: 'Reusable', defaultValue: true },
			{ key: 'inserter', label: 'Show in inserter', defaultValue: true },
			{ key: 'className', label: 'Additional CSS class', defaultValue: true },
			{ key: 'customClassName', label: 'Custom class name', defaultValue: true },
		],
	},
	{
		label: 'Layout',
		options: [
			{ key: 'align', label: 'Align (wide/full)', defaultValue: false },
			{ key: 'alignWide', label: 'Wide alignment', defaultValue: true },
		],
	},
	{
		label: 'Color',
		options: [
			{ key: 'color.background', label: 'Background color', defaultValue: true },
			{ key: 'color.text', label: 'Text color', defaultValue: true },
			{ key: 'color.link', label: 'Link color', defaultValue: false },
			{ key: 'color.gradients', label: 'Gradients', defaultValue: false },
		],
	},
	{
		label: 'Typography',
		options: [
			{ key: 'typography.fontSize', label: 'Font size', defaultValue: false },
			{ key: 'typography.lineHeight', label: 'Line height', defaultValue: false },
			{ key: 'typography.fontStyle', label: 'Font style', defaultValue: false },
			{ key: 'typography.fontWeight', label: 'Font weight', defaultValue: false },
			{ key: 'typography.textDecoration', label: 'Text decoration', defaultValue: false },
			{ key: 'typography.textTransform', label: 'Text transform', defaultValue: false },
		],
	},
	{
		label: 'Spacing',
		options: [
			{ key: 'spacing.margin', label: 'Margin', defaultValue: false },
			{ key: 'spacing.padding', label: 'Padding', defaultValue: false },
			{ key: 'spacing.blockGap', label: 'Block gap', defaultValue: false },
		],
	},
];
