import CopyButton from './CopyButton';

/**
 * Single generator output panel: filename header + syntax-highlighted code + copy button.
 *
 * Uses a <pre> block rather than the MDX CodeBlock component, since this is
 * a runtime component (not inside an MDX document).
 *
 * @param {Object} props
 * @param {string} props.filename - Displayed filename label.
 * @param {string} props.code     - The code string to display.
 */
export default function GeneratorOutput( { filename, code } ) {
	return (
		<div className="iface-generator__file">
			<div className="iface-generator__file-header">
				<span className="iface-generator__filename">{ filename }</span>
				<CopyButton text={ code } />
			</div>
			<pre
				style={ {
					margin: 0,
					padding: '1.25rem',
					overflowX: 'auto',
					fontSize: '0.825rem',
					lineHeight: 1.6,
					fontFamily: 'var(--font-mono)',
					background: '#011627',
					color: '#d6deeb',
				} }
			>
				<code>{ code }</code>
			</pre>
		</div>
	);
}
