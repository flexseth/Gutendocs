import { generateBlockJson } from './generateBlockJson';
import { generatePluginPhp } from './generatePluginPhp';
import { generateEditJs } from './generateEditJs';
import { generateIndexJs } from './generateIndexJs';
import { generateSaveJs } from './generateSaveJs';
import { generateViewJs } from './generateViewJs';
import { generatePackageJson } from './generatePackageJson';

export { generateBlockJson, generatePluginPhp, generateEditJs, generateIndexJs, generateSaveJs, generateViewJs, generatePackageJson };

/**
 * Generates all files for a plugin project.
 *
 * @param {Object} project - The full project model.
 * @return {Object} Map of filename to generated content string.
 */
export function generateAll( project ) {
	const { plugin, blocks = [] } = project;
	const files = {
		[ `${ plugin.slug || 'my-plugin' }.php` ]: generatePluginPhp( project ),
		'package.json': generatePackageJson( project ),
	};

	blocks.filter( ( b ) => b.name ).forEach( ( block ) => {
		const prefix = `src/${ block.name }`;
		files[ `${ prefix }/block.json` ] = generateBlockJson( block, plugin );
		files[ `${ prefix }/index.js` ] = generateIndexJs( block, plugin );
		files[ `${ prefix }/edit.js` ] = generateEditJs( block, plugin );
		files[ `${ prefix }/save.js` ] = generateSaveJs( block, plugin );
		if ( block.viewScript ) {
			files[ `${ prefix }/view.js` ] = generateViewJs( block, plugin );
		}
	} );

	return files;
}
