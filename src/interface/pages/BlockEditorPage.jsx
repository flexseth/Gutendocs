import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useProject } from '../hooks/useProject';
import BlockForm from '../components/blocks/BlockForm';
import InterfaceBreadcrumb from '../components/shared/InterfaceBreadcrumb';
import SectionHeading from '../components/shared/SectionHeading';
import { createBlock } from '../data/defaultBlock';

/**
 * Block editor page — handles both create (/blocks/new) and edit (/blocks/:blockId) modes.
 */
export default function BlockEditorPage() {
	const { projectId, blockId } = useParams();
	const navigate = useNavigate();
	const { project, addBlock, updateBlock } = useProject( projectId );
	const isNew = blockId === undefined;

	const [ localBlock, setLocalBlock ] = useState( null );

	useEffect( () => {
		if ( ! project ) return;
		if ( isNew ) {
			setLocalBlock( createBlock() );
		} else {
			const found = project.blocks.find( ( b ) => b.id === blockId );
			if ( found ) setLocalBlock( { ...found } );
		}
	}, [ project, blockId, isNew ] );

	if ( ! project ) {
		return <Navigate to="/interface" replace />;
	}

	if ( ! localBlock ) return null;

	function handleSave() {
		if ( isNew ) {
			addBlock( localBlock );
		} else {
			updateBlock( blockId, localBlock );
		}
		navigate( `/interface/${ projectId }` );
	}

	return (
		<div>
			<InterfaceBreadcrumb
				crumbs={ [
					{ label: 'Portfolio', path: '/interface' },
					{ label: project.plugin.name || 'Untitled Plugin', path: `/interface/${ projectId }` },
					{ label: isNew ? 'New Block' : localBlock.title || localBlock.name || 'Edit Block' },
				] }
			/>

			<SectionHeading
				title={ isNew ? 'New Block' : `Edit: ${ localBlock.title || localBlock.name }` }
			/>

			<BlockForm
				block={ localBlock }
				namespace={ project.plugin.namespace || project.plugin.slug }
				onChange={ setLocalBlock }
			/>

			<div style={ { display: 'flex', gap: '0.75rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' } }>
				<button
					type="button"
					className="iface-btn iface-btn--secondary"
					onClick={ () => navigate( `/interface/${ projectId }` ) }
				>
					Cancel
				</button>
				<button
					type="button"
					className="iface-btn iface-btn--primary"
					disabled={ ! localBlock.name }
					onClick={ handleSave }
				>
					{ isNew ? 'Add Block' : 'Save Block' }
				</button>
			</div>
		</div>
	);
}
