/**
 * Button component with variant styles.
 *
 * @param {Object}  props
 * @param {string}  props.variant  - One of 'primary', 'secondary', 'outline'.
 * @param {string}  props.size     - One of 'small', 'medium', 'large'.
 * @param {boolean} props.disabled - Whether the button is disabled.
 * @param {Function} props.onClick - Click handler.
 * @param {React.ReactNode} props.children - Button label content.
 */
export default function Button( {
	variant = 'primary',
	size = 'medium',
	disabled = false,
	onClick,
	children,
} ) {
	return (
		<button
			className={ `btn btn--${ variant } btn--${ size }` }
			disabled={ disabled }
			onClick={ onClick }
			type="button"
		>
			{ children }
		</button>
	);
}
