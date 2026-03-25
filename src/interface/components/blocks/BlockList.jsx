import { Link } from 'react-router-dom';
import BlockListItem from './BlockListItem';

/**
 * List of all blocks for a project.
 *
 * @param {Object}   props
 * @param {Array}    props.blocks    - Array of block models.
 * @param {string}   props.projectId - Parent project ID.
 * @param {string}   props.namespace - Plugin namespace.
 * @param {Function} props.onDelete  - Delete handler.
 */
export default function BlockList( { blocks = [], projectId, namespace, onDelete } ) {
	return (
		<div className="iface-block-list">
			{ blocks.length === 0 && (
				<p style={ { color: 'var(--color-text-muted)', fontSize: '0.875rem' } }>
					No blocks yet. Add one to get started.
				</p>
			) }
			{ blocks.map( ( block ) => (
				<BlockListItem
					key={ block.id }
					block={ block }
					projectId={ projectId }
					namespace={ namespace }
					onDelete={ onDelete }
				/>
			) ) }
			<div style={ { marginTop: '0.75rem' } }>
				<Link
					to={ `/interface/${ projectId }/blocks/new` }
					className="iface-btn iface-btn--secondary iface-btn--sm"
				>
					+ Add Block
				</Link>
			</div>
		</div>
	);
}
