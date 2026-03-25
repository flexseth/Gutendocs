import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useProject } from '../hooks/useProject';
import GeneratorTabs from '../components/generator/GeneratorTabs';
import DownloadBundle from '../components/generator/DownloadBundle';
import AgentPanel from '../components/generator/AgentPanel';
import InterfaceBreadcrumb from '../components/shared/InterfaceBreadcrumb';
import SectionHeading from '../components/shared/SectionHeading';

/**
 * Code generator page — select a block and view all generated file output.
 */
export default function GeneratorPage() {
	const { projectId } = useParams();
	const { project } = useProject( projectId );
	const [ activeBlockId, setActiveBlockId ] = useState( null );

	if ( ! project ) {
		return <Navigate to="/interface" replace />;
	}

	const blocks = project.blocks.filter( ( b ) => b.name );
	const activeBlock = blocks.find( ( b ) => b.id === activeBlockId ) ?? blocks[ 0 ] ?? null;

	return (
		<div>
			<InterfaceBreadcrumb
				crumbs={ [
					{ label: 'Portfolio', path: '/interface' },
					{ label: project.plugin.name || 'Untitled Plugin', path: `/interface/${ projectId }` },
					{ label: 'Generate' },
				] }
			/>

			<div className="iface-page-header">
				<SectionHeading
					title="Code Generator"
					description="Preview and download the scaffolded plugin files."
				/>
				<DownloadBundle project={ project } />
			</div>

			<div className="iface-generator">
				{ blocks.length > 0 && (
					<div className="iface-generator__block-selector">
						<p style={ { fontSize: '0.775rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' } }>
							Blocks
						</p>
						<ul>
							{ blocks.map( ( block ) => (
								<li key={ block.id }>
									<button
										type="button"
										className={ `iface-generator__block-btn${ ( activeBlock?.id === block.id ) ? ' iface-generator__block-btn--active' : '' }` }
										onClick={ () => setActiveBlockId( block.id ) }
									>
										{ block.title || block.name }
									</button>
								</li>
							) ) }
						</ul>
					</div>
				) }

				<div className="iface-generator__output">
					<GeneratorTabs project={ project } activeBlock={ activeBlock } />
				</div>
			</div>

			<AgentPanel />
		</div>
	);
}
