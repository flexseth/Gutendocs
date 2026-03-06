/**
 * Visual simulation of the WordPress InspectorControls sidebar slot.
 *
 * Mirrors the WordPress `InspectorControls` component from `@wordpress/block-editor`.
 * In the real block editor this is a Slot/Fill that inserts children into the
 * block Settings sidebar. Here it renders an inline panel so the documentation
 * demos can show what the sidebar controls look like.
 *
 * @param {Object}          props
 * @param {React.ReactNode} props.children        - PanelBody and control children.
 * @param {string}          [props.group='default'] - Sidebar slot group.
 * @param {string}          [props.className='']    - Additional CSS class names.
 */
export default function InspectorControls( { children, group = 'default', className = '' } ) {
	const groupLabel = group === 'default' ? 'Settings' : group.charAt( 0 ).toUpperCase() + group.slice( 1 );
	const classes = [ 'inspector-controls', className ].filter( Boolean ).join( ' ' );

	return (
		<aside className={ classes } aria-label={ `${ groupLabel } panel` }>
			<div className="inspector-controls__header">
				<span className="inspector-controls__label">{ groupLabel }</span>
			</div>
			<div className="inspector-controls__content">
				{ children }
			</div>
		</aside>
	);
}
