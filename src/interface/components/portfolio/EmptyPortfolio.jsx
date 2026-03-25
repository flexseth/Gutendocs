import { Link } from 'react-router-dom';

/**
 * Zero-state display when no projects exist.
 */
export default function EmptyPortfolio() {
	return (
		<div className="iface-empty">
			<div className="iface-empty__icon">🧩</div>
			<h3>No projects yet</h3>
			<p>
				Create your first WordPress plugin prototype to get started with
				the block builder.
			</p>
			<Link to="/interface/new" className="iface-btn iface-btn--primary">
				Create a Plugin Project
			</Link>
		</div>
	);
}
