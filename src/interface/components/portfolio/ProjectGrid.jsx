import ProjectCard from './ProjectCard';
import EmptyPortfolio from './EmptyPortfolio';

/**
 * Grid of project cards.
 *
 * @param {Object}   props
 * @param {Array}    props.projects    - Array of project objects.
 * @param {Function} props.onDelete    - Delete handler.
 * @param {Function} props.onDuplicate - Duplicate handler.
 */
export default function ProjectGrid( { projects, onDelete, onDuplicate } ) {
	if ( ! projects || projects.length === 0 ) {
		return <EmptyPortfolio />;
	}

	return (
		<div className="iface-project-grid">
			{ projects.map( ( project ) => (
				<ProjectCard
					key={ project.id }
					project={ project }
					onDelete={ onDelete }
					onDuplicate={ onDuplicate }
				/>
			) ) }
		</div>
	);
}
