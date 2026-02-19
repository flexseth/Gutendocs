import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MDXComponentsProvider } from './providers/MDXComponents';
import App from './App';
import './styles/docs.css';

createRoot( document.getElementById( 'root' ) ).render(
	<StrictMode>
		<BrowserRouter>
			<MDXComponentsProvider>
				<App />
			</MDXComponentsProvider>
		</BrowserRouter>
	</StrictMode>
);
