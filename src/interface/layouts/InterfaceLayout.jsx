import { NavLink, Link } from 'react-router-dom';

/**
 * Layout shell for the Plugin Builder interface.
 *
 * Provides a fixed sidebar with navigation and a main content area.
 *
 * @param {Object}          props
 * @param {React.ReactNode} props.children - Page content.
 */
export default function InterfaceLayout( { children } ) {
	return (
		<div className="iface-layout">
			<aside className="iface-sidebar">
				<div className="iface-sidebar__brand">
					<h2>Plugin Builder</h2>
					<p className="iface-sidebar__brand-sub">WordPress Prototyper</p>
				</div>
				<nav className="iface-sidebar__nav">
					<ul>
						<li>
							<NavLink
								to="/interface"
								end
								className={ ( { isActive } ) =>
									`iface-sidebar__link${ isActive ? ' iface-sidebar__link--active' : '' }`
								}
							>
								Portfolio
							</NavLink>
						</li>
					</ul>
				</nav>
				<div className="iface-sidebar__back">
					<Link to="/docs/getting-started">← Back to Docs</Link>
				</div>
			</aside>
			<main className="iface-content">
				{ children }
			</main>
		</div>
	);
}
