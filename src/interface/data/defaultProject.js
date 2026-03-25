/**
 * Creates a new project object with default values.
 *
 * @return {Object} A blank project model.
 */
export function createProject() {
	const now = new Date().toISOString();
	return {
		id: crypto.randomUUID(),
		createdAt: now,
		updatedAt: now,
		status: 'draft',
		screenshot: '',
		plugin: {
			name: '',
			slug: '',
			description: '',
			author: '',
			authorUri: '',
			pluginUri: '',
			version: '1.0.0',
			requiresWp: '6.4',
			requiresPhp: '7.4',
			textDomain: '',
			license: 'GPL-2.0-or-later',
			licenseUri: 'https://www.gnu.org/licenses/gpl-2.0.html',
			tags: [],
			namespace: '',
			hasBlocks: true,
		},
		blocks: [],
	};
}
