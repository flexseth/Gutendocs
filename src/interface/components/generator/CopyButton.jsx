import { useClipboard } from '../../hooks/useClipboard';

/**
 * Copy-to-clipboard button with transient "Copied!" feedback.
 *
 * @param {Object} props
 * @param {string} props.text - Text to copy.
 */
export default function CopyButton( { text } ) {
	const { copy, isCopied } = useClipboard();

	return (
		<button
			type="button"
			className={ `iface-copy-btn${ isCopied ? ' iface-copy-btn--copied' : '' }` }
			onClick={ () => copy( text ) }
			aria-label={ isCopied ? 'Copied!' : 'Copy to clipboard' }
		>
			{ isCopied ? '✓ Copied!' : 'Copy' }
		</button>
	);
}
