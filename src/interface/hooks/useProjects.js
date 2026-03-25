import { useLocalStorage } from '../../hooks/useLocalStorage';
import { createProject } from '../data/defaultProject';

/**
 * CRUD hook for the projects localStorage store.
 *
 * @return {Object} Projects array and mutation functions.
 */
export function useProjects() {
	const [ projects, setProjects ] = useLocalStorage( 'gutendocs-projects', [] );

	/**
	 * Add a new project.
	 *
	 * @param {Object} overrides - Optional field overrides for the new project.
	 * @return {Object} The newly created project.
	 */
	function addProject( overrides = {} ) {
		const project = { ...createProject(), ...overrides };
		setProjects( ( prev ) => [ ...prev, project ] );
		return project;
	}

	/**
	 * Update an existing project by ID.
	 *
	 * @param {string} id      - Project ID.
	 * @param {Object} changes - Partial project fields to merge.
	 */
	function updateProject( id, changes ) {
		setProjects( ( prev ) =>
			prev.map( ( p ) =>
				p.id === id
					? { ...p, ...changes, updatedAt: new Date().toISOString() }
					: p
			)
		);
	}

	/**
	 * Delete a project by ID.
	 *
	 * @param {string} id - Project ID.
	 */
	function deleteProject( id ) {
		setProjects( ( prev ) => prev.filter( ( p ) => p.id !== id ) );
	}

	/**
	 * Duplicate a project, giving the copy a new ID and "Copy of" name.
	 *
	 * @param {string} id - Project ID to duplicate.
	 * @return {Object} The newly created duplicate project.
	 */
	function duplicateProject( id ) {
		const original = projects.find( ( p ) => p.id === id );
		if ( ! original ) return null;
		const now = new Date().toISOString();
		const copy = {
			...original,
			id: crypto.randomUUID(),
			createdAt: now,
			updatedAt: now,
			status: 'draft',
			plugin: {
				...original.plugin,
				name: `Copy of ${ original.plugin.name }`,
				slug: `copy-of-${ original.plugin.slug }`,
				textDomain: `copy-of-${ original.plugin.textDomain }`,
				namespace: `copy-of-${ original.plugin.namespace }`,
			},
			blocks: original.blocks.map( ( b ) => ( {
				...b,
				id: crypto.randomUUID(),
				attributes: b.attributes.map( ( a ) => ( {
					...a,
					id: crypto.randomUUID(),
				} ) ),
			} ) ),
		};
		setProjects( ( prev ) => [ ...prev, copy ] );
		return copy;
	}

	return {
		projects,
		addProject,
		updateProject,
		deleteProject,
		duplicateProject,
	};
}
