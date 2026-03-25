import { useState } from 'react';
import { generateAll } from '../../generators/index';

/**
 * Downloads all generated plugin files as a single .zip bundle.
 *
 * Uses jszip to package files in the correct create-block folder structure:
 *   my-plugin/
 *   ├── my-plugin.php
 *   ├── package.json
 *   └── src/
 *       └── block-name/
 *           ├── block.json
 *           ├── edit.js
 *           ├── save.js
 *           └── view.js  (only when viewScript is enabled)
 *
 * @param {Object} props
 * @param {Object} props.project - The full project model.
 */
export default function DownloadBundle( { project } ) {
	const [ loading, setLoading ] = useState( false );
	const files = generateAll( project );
	const count = Object.keys( files ).length;
	const slug = project?.plugin?.slug || 'my-plugin';

	async function handleDownload() {
		setLoading( true );
		try {
			const JSZip = ( await import( 'jszip' ) ).default;
			const zip = new JSZip();
			const folder = zip.folder( slug );

			Object.entries( files ).forEach( ( [ path, content ] ) => {
				folder.file( path, content );
			} );

			const blob = await zip.generateAsync( { type: 'blob' } );
			const url = URL.createObjectURL( blob );
			const a = document.createElement( 'a' );
			a.href = url;
			a.download = `${ slug }.zip`;
			a.click();
			URL.revokeObjectURL( url );
		} finally {
			setLoading( false );
		}
	}

	return (
		<button
			type="button"
			className="iface-btn iface-btn--primary"
			onClick={ handleDownload }
			disabled={ loading }
		>
			{ loading ? 'Zipping…' : `⬇ Download .zip (${ count } files)` }
		</button>
	);
}
