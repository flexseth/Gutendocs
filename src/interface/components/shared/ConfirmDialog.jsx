/**
 * Generic confirmation dialog modal.
 *
 * @param {Object}   props
 * @param {boolean}  props.isOpen    - Whether the dialog is visible.
 * @param {string}   props.title     - Dialog title.
 * @param {string}   props.message   - Body message.
 * @param {Function} props.onConfirm - Called when user confirms.
 * @param {Function} props.onCancel  - Called when user cancels.
 */
export default function ConfirmDialog( {
	isOpen,
	title,
	message,
	onConfirm,
	onCancel,
} ) {
	if ( ! isOpen ) return null;

	return (
		<div
			className="iface-dialog-overlay"
			role="dialog"
			aria-modal="true"
			aria-labelledby="iface-dialog-title"
		>
			<div className="iface-dialog">
				<h3 id="iface-dialog-title">{ title }</h3>
				<p>{ message }</p>
				<div className="iface-dialog__actions">
					<button
						type="button"
						className="iface-btn iface-btn--secondary"
						onClick={ onCancel }
					>
						Cancel
					</button>
					<button
						type="button"
						className="iface-btn iface-btn--danger"
						onClick={ onConfirm }
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}
