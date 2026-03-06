/**
 * Visual simulation of the WordPress BlockControls toolbar slot.
 *
 * Mirrors the WordPress `BlockControls` component from `@wordpress/block-editor`.
 * In the real block editor this is a Slot/Fill that inserts children into the
 * floating block toolbar. Here it renders an inline toolbar bar so the
 * documentation demos can show what the toolbar looks like.
 *
 * @param {Object}          props
 * @param {React.ReactNode} props.children   - ToolbarGroup / ToolbarButton children.
 * @param {string}          [props.group='default'] - Toolbar slot group label.
 * @param {string}          [props.className='']    - Additional CSS class names.
 */
export default function BlockControls( { children, group = 'default', className = '' } ) {
	const groupClass = group !== 'default' ? ` block-controls--${ group }` : '';
	const classes = [ 'block-controls', groupClass, className ].filter( Boolean ).join( ' ' );

	return (
		<div className={ classes } role="toolbar" aria-label="Block controls toolbar">
			<div className="block-controls__toolbar">
				{ children }
			</div>
		</div>
	);
}
