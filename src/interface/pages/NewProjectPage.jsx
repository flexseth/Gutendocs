import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import PluginMetaForm from '../components/plugin/PluginMetaForm';
import InterfaceBreadcrumb from '../components/shared/InterfaceBreadcrumb';
import { createProject } from '../data/defaultProject';

/**
 * Two-step wizard for creating a new plugin project.
 */
export default function NewProjectPage() {
	const navigate = useNavigate();
	const { addProject } = useProjects();
	const [ step, setStep ] = useState( 1 );
	const [ plugin, setPlugin ] = useState( createProject().plugin );

	function handleCreate() {
		const project = addProject( { plugin } );
		navigate( `/interface/${ project.id }` );
	}

	const isValid = !! plugin.name.trim();

	return (
		<div className="iface-wizard">
			<InterfaceBreadcrumb
				crumbs={ [
					{ label: 'Portfolio', path: '/interface' },
					{ label: 'New Project' },
				] }
			/>

			<div className="iface-page-header">
				<h1>New Plugin Project</h1>
			</div>

			<div className="iface-wizard__steps">
				<div className={ `iface-wizard__step${ step >= 1 ? ' iface-wizard__step--active' : '' }` }>
					1. Plugin Details
				</div>
				<div className={ `iface-wizard__step${ step >= 2 ? ' iface-wizard__step--active' : '' }` }>
					2. Confirm
				</div>
			</div>

			{ step === 1 && (
				<div>
					<PluginMetaForm plugin={ plugin } onChange={ setPlugin } />
					<div className="iface-wizard__actions">
						<button
							type="button"
							className="iface-btn iface-btn--secondary"
							onClick={ () => navigate( '/interface' ) }
						>
							Cancel
						</button>
						<button
							type="button"
							className="iface-btn iface-btn--primary"
							disabled={ ! isValid }
							onClick={ () => setStep( 2 ) }
						>
							Next →
						</button>
					</div>
				</div>
			) }

			{ step === 2 && (
				<div>
					<div
						style={ {
							background: 'var(--color-bg-muted)',
							border: '1px solid var(--color-border)',
							borderRadius: '8px',
							padding: '1.25rem',
							marginBottom: '1.5rem',
						} }
					>
						<h3 style={ { marginBottom: '0.75rem' } }>{ plugin.name }</h3>
						<p style={ { color: 'var(--color-text-muted)', fontSize: '0.875rem' } }>
							{ plugin.description || 'No description.' }
						</p>
						<p
							style={ {
								marginTop: '0.5rem',
								fontFamily: 'var(--font-mono)',
								fontSize: '0.8rem',
								color: 'var(--color-text-muted)',
							} }
						>
							Slug: { plugin.slug }
						</p>
					</div>
					<div className="iface-wizard__actions">
						<button
							type="button"
							className="iface-btn iface-btn--secondary"
							onClick={ () => setStep( 1 ) }
						>
							← Back
						</button>
						<button
							type="button"
							className="iface-btn iface-btn--primary"
							onClick={ handleCreate }
						>
							Create Project
						</button>
					</div>
				</div>
			) }
		</div>
	);
}
