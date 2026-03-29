/**
 * Converts a slug to a PHP namespace (PascalCase).
 *
 * @param {string} slug - Hyphen-separated slug.
 * @return {string} PascalCase namespace.
 */
function slugToNamespace( slug ) {
	return slug
		.split( '-' )
		.map( ( part ) => part.charAt( 0 ).toUpperCase() + part.slice( 1 ) )
		.join( '_' );
}

/**
 * Generates a plugin.php file content string.
 *
 * @param {Object} project - The full project model.
 * @return {string} Formatted plugin.php content.
 */
export function generatePluginPhp( project ) {
	const { plugin, blocks } = project;
	const namespace = slugToNamespace( plugin.namespace || plugin.slug || 'my-plugin' );
	const slug = plugin.slug || 'my-plugin';

	const blockRegistrations = ( blocks || [] )
		.filter( ( b ) => b.name )
		.map(
			( b ) =>
				`\t$block_dir = __DIR__ . '/build/${ b.name }';\n\tif ( file_exists( $block_dir ) ) {\n\t\tregister_block_type( $block_dir );\n\t}`
		)
		.join( '\n\n' );

	const hasBlocks = plugin.hasBlocks && blocks && blocks.length > 0;

	return `<?php
/**
 * Plugin Name:       ${ plugin.name || 'My Plugin' }
 * Plugin URI:        ${ plugin.pluginUri || '' }
 * Description:       ${ plugin.description || '' }
 * Version:           ${ plugin.version || '1.0.0' }
 * Requires at least: ${ plugin.requiresWp || '6.4' }
 * Requires PHP:      ${ plugin.requiresPhp || '7.4' }
 * Author:            ${ plugin.author || '' }
 * Author URI:        ${ plugin.authorUri || '' }
 * License:           ${ plugin.license || 'GPL-2.0-or-later' }
 * License URI:       ${ plugin.licenseUri || 'https://www.gnu.org/licenses/gpl-2.0.html' }
 * Text Domain:       ${ plugin.textDomain || slug }
 */

namespace ${ namespace };

defined( 'ABSPATH' ) || exit;
${ hasBlocks ? `
/**
 * Registers all blocks for this plugin.
 *
 * @return void
 */
function register_blocks(): void {
${ blockRegistrations }
}
add_action( 'init', __NAMESPACE__ . '\\\\register_blocks' );
` : '' }`;
}
