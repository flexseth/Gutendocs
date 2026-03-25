import { Link } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import ProjectGrid from '../components/portfolio/ProjectGrid';
import SectionHeading from '../components/shared/SectionHeading';

/**
 * Portfolio page — shows all saved projects.
 */
export default function PortfolioPage() {
	const { projects, deleteProject, duplicateProject } = useProjects();

	return (
		<div className="iface-portfolio">
			<div className="iface-page-header">
				<h1>Plugin Projects</h1>
				<Link to="/interface/new" className="iface-btn iface-btn--primary">
					+ New Project
				</Link>
			</div>

			{ projects.length > 0 && (
				<SectionHeading
					title={ `${ projects.length } project${ projects.length !== 1 ? 's' : '' }` }
				/>
			) }

			<ProjectGrid
				projects={ projects }
				onDelete={ deleteProject }
				onDuplicate={ duplicateProject }
			/>
		</div>
	);
}
