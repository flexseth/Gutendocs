import { Link } from 'react-router-dom';

/**
 * Breadcrumb trail for interface pages.
 *
 * @param {Object}   props
 * @param {Array}    props.crumbs - Array of { label, path } objects. Last item is current page.
 */
export default function InterfaceBreadcrumb( { crumbs = [] } ) {
	return (
		<nav className="iface-breadcrumb" aria-label="Breadcrumb">
			{ crumbs.map( ( crumb, index ) => {
				const isLast = index === crumbs.length - 1;
				return (
					<span key={ crumb.path || crumb.label } style={ { display: 'contents' } }>
						{ index > 0 && (
							<span className="iface-breadcrumb__sep" aria-hidden="true">
								/
							</span>
						) }
						{ isLast ? (
							<span className="iface-breadcrumb__item iface-breadcrumb__item--current">
								{ crumb.label }
							</span>
						) : (
							<Link className="iface-breadcrumb__item" to={ crumb.path }>
								{ crumb.label }
							</Link>
						) }
					</span>
				);
			} ) }
		</nav>
	);
}
