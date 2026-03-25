import { useParams, Navigate } from 'react-router-dom';
import { useProject } from '../hooks/useProject';
import PluginMetaForm from '../components/plugin/PluginMetaForm';
import InterfaceBreadcrumb from '../components/shared/InterfaceBreadcrumb';
import SectionHeading from '../components/shared/SectionHeading';

/**
 * Full plugin metadata editor page.
 * Auto-saves on every field change via useProject.
 */
export default function PluginEditorPage() {
	const { projectId } = useParams();
	const { project, updatePlugin } = useProject( projectId );

	if ( ! project ) {
		return <Navigate to="/interface" replace />;
	}

	return (
		<div>
			<InterfaceBreadcrumb
				crumbs={ [
					{ label: 'Portfolio', path: '/interface' },
					{ label: project.plugin.name || 'Untitled Plugin', path: `/interface/${ projectId }` },
					{ label: 'Plugin Settings' },
				] }
			/>

			<SectionHeading
				title="Plugin Settings"
				description="Metadata written to the plugin header comment and plugin.php."
			/>

			<PluginMetaForm
				plugin={ project.plugin }
				onChange={ ( updated ) => updatePlugin( updated ) }
			/>
		</div>
	);
}
