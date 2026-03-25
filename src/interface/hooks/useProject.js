import { useProjects } from './useProjects';
import { createBlock } from '../data/defaultBlock';

/**
 * Hook for reading and updating a single project.
 *
 * @param {string} id - The project ID.
 * @return {Object} The project and update/block mutation helpers.
 */
export function useProject( id ) {
	const { projects, updateProject } = useProjects();
	const project = projects.find( ( p ) => p.id === id ) ?? null;

	/**
	 * Merge changes into the project's plugin metadata.
	 *
	 * @param {Object} changes - Partial plugin fields.
	 */
	function updatePlugin( changes ) {
		if ( ! project ) return;
		updateProject( id, {
			plugin: { ...project.plugin, ...changes },
		} );
	}

	/**
	 * Add a new block to the project.
	 *
	 * @param {Object} overrides - Optional block field overrides.
	 * @return {Object} The newly created block.
	 */
	function addBlock( overrides = {} ) {
		if ( ! project ) return null;
		const block = { ...createBlock(), ...overrides };
		updateProject( id, {
			blocks: [ ...project.blocks, block ],
		} );
		return block;
	}

	/**
	 * Update an existing block by ID.
	 *
	 * @param {string} blockId  - Block ID.
	 * @param {Object} changes  - Partial block fields to merge.
	 */
	function updateBlock( blockId, changes ) {
		if ( ! project ) return;
		updateProject( id, {
			blocks: project.blocks.map( ( b ) =>
				b.id === blockId ? { ...b, ...changes } : b
			),
		} );
	}

	/**
	 * Delete a block by ID.
	 *
	 * @param {string} blockId - Block ID.
	 */
	function deleteBlock( blockId ) {
		if ( ! project ) return;
		updateProject( id, {
			blocks: project.blocks.filter( ( b ) => b.id !== blockId ),
		} );
	}

	return {
		project,
		updatePlugin,
		addBlock,
		updateBlock,
		deleteBlock,
	};
}
