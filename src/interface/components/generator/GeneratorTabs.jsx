import { useState } from 'react';
import GeneratorOutput from './GeneratorOutput';
import {
	generateBlockJson,
	generatePluginPhp,
	generateEditJs,
	generateSaveJs,
	generateViewJs,
	generatePackageJson,
} from '../../generators/index';

/**
 * Tabbed code generator for all plugin/block output files.
 *
 * When a block is selected, shows block-level files (block.json, edit.js, save.js, view.js).
 * Always shows plugin-level files (plugin.php, package.json).
 *
 * @param {Object} props
 * @param {Object} props.project     - The full project model.
 * @param {Object} [props.activeBlock] - Currently selected block (optional).
 */
export default function GeneratorTabs( { project, activeBlock } ) {
	const { plugin } = project;

	// Build tab definitions.
	const tabs = [];

	if ( activeBlock ) {
		tabs.push( {
			id: 'block.json',
			label: 'block.json',
			code: generateBlockJson( activeBlock, plugin ),
		} );
		tabs.push( {
			id: 'edit.js',
			label: 'edit.js',
			code: generateEditJs( activeBlock, plugin ),
		} );
		tabs.push( {
			id: 'save.js',
			label: 'save.js',
			code: generateSaveJs( activeBlock, plugin ),
		} );
		if ( activeBlock.viewScript ) {
			tabs.push( {
				id: 'view.js',
				label: 'view.js',
				code: generateViewJs( activeBlock, plugin ),
			} );
		}
	}

	tabs.push( {
		id: 'plugin.php',
		label: `${ plugin.slug || 'my-plugin' }.php`,
		code: generatePluginPhp( project ),
	} );

	tabs.push( {
		id: 'package.json',
		label: 'package.json',
		code: generatePackageJson( project ),
	} );

	const [ activeTab, setActiveTab ] = useState( tabs[ 0 ]?.id );
	const current = tabs.find( ( t ) => t.id === activeTab ) ?? tabs[ 0 ];

	return (
		<div className="iface-gen-tabs">
			<div className="iface-gen-tabs__bar" role="tablist">
				{ tabs.map( ( tab ) => (
					<button
						key={ tab.id }
						type="button"
						role="tab"
						aria-selected={ activeTab === tab.id }
						className={ `iface-gen-tabs__tab${ activeTab === tab.id ? ' iface-gen-tabs__tab--active' : '' }` }
						onClick={ () => setActiveTab( tab.id ) }
					>
						{ tab.label }
					</button>
				) ) }
			</div>
			{ current && (
				<div className="iface-gen-tabs__content" role="tabpanel">
					<GeneratorOutput filename={ current.label } code={ current.code } />
				</div>
			) }
		</div>
	);
}
