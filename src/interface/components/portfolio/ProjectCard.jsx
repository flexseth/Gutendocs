import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProjectStatusBadge from './ProjectStatusBadge';
import ConfirmDialog from '../shared/ConfirmDialog';

/**
 * Single project card in the portfolio grid.
 *
 * @param {Object}   props
 * @param {Object}   props.project      - The project model.
 * @param {Function} props.onDelete     - Called with project ID to delete.
 * @param {Function} props.onDuplicate  - Called with project ID to duplicate.
 */
export default function ProjectCard( { project, onDelete, onDuplicate } ) {
	const [ confirmOpen, setConfirmOpen ] = useState( false );
	const navigate = useNavigate();
	const { plugin, blocks, status, id, updatedAt } = project;
	const visibleTags = ( plugin.tags || [] ).slice( 0, 3 );
	const updated = new Date( updatedAt ).toLocaleDateString();

	return (
		<>
			<div className="iface-project-card">
				<div className="iface-project-card__header">
					<h3 className="iface-project-card__name">
						{ plugin.name || 'Untitled Plugin' }
					</h3>
					<ProjectStatusBadge status={ status } />
				</div>

				{ plugin.description && (
					<p className="iface-project-card__desc">{ plugin.description }</p>
				) }

				<div className="iface-project-card__meta">
					<span>{ blocks.length } block{ blocks.length !== 1 ? 's' : '' }</span>
					<span>·</span>
					<span>Updated { updated }</span>
				</div>

				{ visibleTags.length > 0 && (
					<div className="iface-project-card__tags">
						{ visibleTags.map( ( tag ) => (
							<span key={ tag } className="iface-project-card__tag">
								{ tag }
							</span>
						) ) }
					</div>
				) }

				<div className="iface-project-card__actions">
					<Link
						to={ `/interface/${ id }` }
						className="iface-btn iface-btn--primary iface-btn--sm"
					>
						Edit
					</Link>
					<Link
						to={ `/interface/${ id }/generate` }
						className="iface-btn iface-btn--secondary iface-btn--sm"
					>
						Generate
					</Link>
					<button
						type="button"
						className="iface-btn iface-btn--secondary iface-btn--sm"
						onClick={ () => {
							const copy = onDuplicate( id );
							if ( copy ) navigate( `/interface/${ copy.id }` );
						} }
					>
						Duplicate
					</button>
					<button
						type="button"
						className="iface-btn iface-btn--danger iface-btn--sm"
						onClick={ () => setConfirmOpen( true ) }
					>
						Delete
					</button>
				</div>
			</div>

			<ConfirmDialog
				isOpen={ confirmOpen }
				title="Delete project?"
				message={ `"${ plugin.name || 'Untitled Plugin' }" will be permanently deleted.` }
				onConfirm={ () => {
					setConfirmOpen( false );
					onDelete( id );
				} }
				onCancel={ () => setConfirmOpen( false ) }
			/>
		</>
	);
}
