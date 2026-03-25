/**
 * Generates a package.json file content string for a plugin.
 *
 * @param {Object} project - The full project model.
 * @return {string} Formatted package.json content.
 */
export function generatePackageJson( project ) {
	const { plugin } = project;
	const pkg = {
		name: plugin.slug || 'my-plugin',
		version: plugin.version || '1.0.0',
		description: plugin.description || '',
		scripts: {
			build: 'wp-scripts build',
			start: 'wp-scripts start',
			'lint:js': 'wp-scripts lint-js',
			'lint:css': 'wp-scripts lint-style',
			'packages-update': 'wp-scripts packages-update',
		},
		devDependencies: {
			'@wordpress/scripts': '^30.0.0',
		},
	};

	return JSON.stringify( pkg, null, '\t' );
}
