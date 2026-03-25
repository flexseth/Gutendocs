/**
 * Status badge pill for a project.
 *
 * @param {Object} props
 * @param {string} props.status - 'draft' | 'active' | 'archived'
 */
export default function ProjectStatusBadge( { status } ) {
	const labels = {
		draft: 'Draft',
		active: 'Active',
		archived: 'Archived',
	};

	return (
		<span className={ `iface-status-badge iface-status-badge--${ status }` }>
			{ labels[ status ] ?? status }
		</span>
	);
}
