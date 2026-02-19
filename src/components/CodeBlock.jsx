/**
 * Styled code block with optional language label.
 *
 * @param {Object} props
 * @param {string} props.className - Class from MDX (e.g. 'language-jsx').
 * @param {React.ReactNode} props.children - Code string content.
 */
export default function CodeBlock( { className, children } ) {
	const language = className?.replace( 'language-', '' ) || 'text';

	return (
		<div className="code-block">
			<div className="code-block__header">
				<span className="code-block__language">{ language }</span>
			</div>
			<pre className={ `code-block__pre ${ className || '' }` }>
				<code>{ children }</code>
			</pre>
		</div>
	);
}
