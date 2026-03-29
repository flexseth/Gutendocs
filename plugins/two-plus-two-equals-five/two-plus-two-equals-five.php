<?php
/**
 * Plugin Name:       Two Plus Two Equals Five
 * Plugin URI:        https://github.com/flexseth/twoplustwoequalsfive
 * Description:       A great song by Radiohead, here are some lyrics from it.
 * Version:           1.0.0
 * Requires at least: 6.4
 * Requires PHP:      7.4
 * Author:            Seth Miller
 * Author URI:        flexperception.com/plugins
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       flexy_plugins
 */

namespace Flexy_two_Plus_Two_Equals_Five;

defined( 'ABSPATH' ) || exit;

/**
 * Registers all blocks for this plugin.
 *
 * @return void
 */
function register_blocks(): void {
	register_block_type( __DIR__ . '/build/mathrock' );
}
add_action( 'init', __NAMESPACE__ . '\\register_blocks' );
