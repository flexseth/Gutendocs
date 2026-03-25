import { Routes, Route, Navigate } from 'react-router-dom';
import InterfaceLayout from './layouts/InterfaceLayout';
import PortfolioPage from './pages/PortfolioPage';
import NewProjectPage from './pages/NewProjectPage';
import ProjectPage from './pages/ProjectPage';
import PluginEditorPage from './pages/PluginEditorPage';
import BlockEditorPage from './pages/BlockEditorPage';
import GeneratorPage from './pages/GeneratorPage';

/**
 * Sub-router for all /interface/* routes.
 * Wraps pages in InterfaceLayout.
 */
export default function InterfaceApp() {
	return (
		<InterfaceLayout>
			<Routes>
				<Route path="/" element={ <PortfolioPage /> } />
				<Route path="/new" element={ <NewProjectPage /> } />
				<Route path="/:projectId" element={ <ProjectPage /> } />
				<Route path="/:projectId/plugin" element={ <PluginEditorPage /> } />
				<Route path="/:projectId/blocks/new" element={ <BlockEditorPage /> } />
				<Route path="/:projectId/blocks/:blockId" element={ <BlockEditorPage /> } />
				<Route path="/:projectId/generate" element={ <GeneratorPage /> } />
				<Route path="*" element={ <Navigate to="/interface" replace /> } />
			</Routes>
		</InterfaceLayout>
	);
}
