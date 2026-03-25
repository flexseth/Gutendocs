import { useProject } from './useProject';

/**
 * Hook for reading and updating a single block within a project.
 *
 * @param {string} projectId - The project ID.
 * @param {string} blockId   - The block ID.
 * @return {Object} The block and its update helper.
 */
export function useBlock( projectId, blockId ) {
	const { project, updateBlock } = useProject( projectId );
	const block = project?.blocks?.find( ( b ) => b.id === blockId ) ?? null;

	/**
	 * Merge changes into the block.
	 *
	 * @param {Object} changes - Partial block fields.
	 */
	function update( changes ) {
		updateBlock( blockId, changes );
	}

	return { block, update };
}
