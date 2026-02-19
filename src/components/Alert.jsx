/**
 * Alert callout component with variant styles.
 *
 * @param {Object}  props
 * @param {string}  props.variant  - One of 'info', 'warning', 'success', 'error'.
 * @param {string}  props.title    - Optional heading for the alert.
 * @param {React.ReactNode} props.children - Alert body content.
 */
export default function Alert( { variant = 'info', title, children } ) {
	const icons = {
		info: 'i',
		warning: '!',
		success: '\u2713',
		error: '\u2717',
	};

	return (
		<div className={ `alert alert--${ variant }` } role="alert">
			<span className="alert__icon">{ icons[ variant ] || icons.info }</span>
			<div className="alert__content">
				{ title && <strong className="alert__title">{ title }</strong> }
				<div className="alert__body">{ children }</div>
			</div>
		</div>
	);
}
