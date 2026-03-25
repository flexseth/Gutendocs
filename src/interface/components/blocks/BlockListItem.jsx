import { Link } from 'react-router-dom';
import BlockNamePreview from './BlockNamePreview';

/**
 * Single block row in the block list.
 *
 * @param {Object}   props
 * @param {Object}   props.block     - Block model.
 * @param {string}   props.projectId - Parent project ID.
 * @param {string}   props.namespace - Plugin namespace for preview.
 * @param {Function} props.onDelete  - Called with block ID.
 */
export default function BlockListItem( { block, projectId, namespace, onDelete } ) {
	return (
		<div className="iface-block-item">
			<div>
				<div className="iface-block-item__name">
					{ block.title || block.name || 'Untitled Block' }
				</div>
				{ block.name && (
					<div className="iface-block-item__slug">
						<BlockNamePreview namespace={ namespace } blockName={ block.name } />
					</div>
				) }
				<div className="iface-block-item__meta">
					{ block.attributes.length } attribute{ block.attributes.length !== 1 ? 's' : '' }
				</div>
			</div>
			<div className="iface-block-item__actions">
				<Link
					to={ `/interface/${ projectId }/blocks/${ block.id }` }
					className="iface-btn iface-btn--secondary iface-btn--sm"
				>
					Edit
				</Link>
				<button
					type="button"
					className="iface-btn iface-btn--danger iface-btn--sm"
					onClick={ () => onDelete( block.id ) }
				>
					Delete
				</button>
			</div>
		</div>
	);
}
