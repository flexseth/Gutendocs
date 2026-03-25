import { Link, useParams, Navigate } from 'react-router-dom';
import { useProject } from '../hooks/useProject';
import BlockList from '../components/blocks/BlockList';
import InterfaceBreadcrumb from '../components/shared/InterfaceBreadcrumb';
import SectionHeading from '../components/shared/SectionHeading';
import ProjectStatusBadge from '../components/portfolio/ProjectStatusBadge';

/**
 * Project hub — overview of a single plugin project.
 */
export default function ProjectPage() {
	const { projectId } = useParams();
	const { project, deleteBlock } = useProject( projectId );

	if ( ! project ) {
		return <Navigate to="/interface" replace />;
	}

	const { plugin, blocks, status } = project;

	return (
		<div>
			<InterfaceBreadcrumb
				crumbs={ [
					{ label: 'Portfolio', path: '/interface' },
					{ label: plugin.name || 'Untitled Plugin' },
				] }
			/>

			<div className="iface-page-header">
				<div>
					<h1 style={ { display: 'flex', alignItems: 'center', gap: '0.75rem' } }>
						{ plugin.name || 'Untitled Plugin' }
						<ProjectStatusBadge status={ status } />
					</h1>
					{ plugin.description && (
						<p style={ { color: 'var(--color-text-muted)', marginTop: '0.25rem' } }>
							{ plugin.description }
						</p>
					) }
				</div>
			</div>

			<div className="iface-hub">
				<Link to={ `/interface/${ projectId }/plugin` } className="iface-hub-card">
					<div className="iface-hub-card__icon">⚙</div>
					<h3>Plugin Settings</h3>
					<p>Name, author, version, license, and metadata.</p>
				</Link>
				<Link to={ `/interface/${ projectId }/generate` } className="iface-hub-card">
					<div className="iface-hub-card__icon">⬇</div>
					<h3>Generate Code</h3>
					<p>Preview and download all scaffolded plugin files.</p>
				</Link>
			</div>

			<SectionHeading
				title={ `Blocks (${ blocks.length })` }
				description="Gutenberg blocks registered by this plugin."
			/>

			<BlockList
				blocks={ blocks }
				projectId={ projectId }
				namespace={ plugin.namespace || plugin.slug }
				onDelete={ deleteBlock }
			/>
		</div>
	);
}
