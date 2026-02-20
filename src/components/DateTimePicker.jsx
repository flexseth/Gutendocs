/**
 * Date and time picker component for selecting a date, time, or both.
 *
 * Mirrors the WordPress `DateTimePicker` component from `@wordpress/components`.
 *
 * @param {Object}   props
 * @param {string}   props.label             - Label text for the control.
 * @param {string}   props.value             - Current ISO 8601 date/time string (controlled).
 * @param {Function} props.onChange          - Callback fired with the new ISO string on change.
 * @param {string}   [props.currentDate]     - Alias for value; used when integrating with WordPress block attributes.
 * @param {boolean}  [props.is12Hour]        - Display time in 12-hour (AM/PM) format. Default false.
 * @param {string}   [props.help]            - Optional help text displayed below the control.
 * @param {boolean}  [props.disabled]        - Whether the control is disabled.
 * @param {string}   [props.className]       - Additional CSS class names.
 * @param {boolean}  [props.dateOnly]        - Show only the date input. Default false.
 * @param {boolean}  [props.timeOnly]        - Show only the time input. Default false.
 */
export default function DateTimePicker( {
	label,
	value,
	onChange,
	currentDate,
	is12Hour = false,
	help,
	disabled = false,
	className = '',
	dateOnly = false,
	timeOnly = false,
} ) {
	const controlled = value ?? currentDate ?? '';
	const id = `datetime-${ label?.toLowerCase().replace( /\s+/g, '-' ) }`;

	const toInputDate = ( iso ) => {
		if ( ! iso ) return '';
		return iso.slice( 0, 10 );
	};

	const toInputTime = ( iso ) => {
		if ( ! iso ) return '';
		const d = new Date( iso );
		if ( isNaN( d.getTime() ) ) return '';
		const hh = String( d.getHours() ).padStart( 2, '0' );
		const mm = String( d.getMinutes() ).padStart( 2, '0' );
		return `${ hh }:${ mm }`;
	};

	const buildISO = ( datePart, timePart ) => {
		if ( ! datePart ) return '';
		const timeStr = timePart || '00:00';
		return `${ datePart }T${ timeStr }:00`;
	};

	const handleDateChange = ( event ) => {
		if ( disabled || ! onChange ) return;
		const newDate = event.target.value;
		const existingTime = toInputTime( controlled );
		onChange( buildISO( newDate, existingTime ) );
	};

	const handleTimeChange = ( event ) => {
		if ( disabled || ! onChange ) return;
		const newTime = event.target.value;
		const existingDate = toInputDate( controlled ) || new Date().toISOString().slice( 0, 10 );
		onChange( buildISO( existingDate, newTime ) );
	};

	const showDate = ! timeOnly;
	const showTime = ! dateOnly;

	return (
		<div
			className={ `date-time-picker${ className ? ` ${ className }` : '' }${ disabled ? ' date-time-picker--disabled' : '' }` }
		>
			{ label && (
				<span className="date-time-picker__label">
					{ label }
				</span>
			) }
			<div className="date-time-picker__fields">
				{ showDate && (
					<input
						id={ timeOnly ? undefined : id }
						type="date"
						className="date-time-picker__date"
						value={ toInputDate( controlled ) }
						onChange={ handleDateChange }
						disabled={ disabled }
						aria-label={ label ? `${ label } date` : 'Date' }
						aria-describedby={ help ? `${ id }-help` : undefined }
					/>
				) }
				{ showTime && (
					<input
						id={ dateOnly ? undefined : ( timeOnly ? id : `${ id }-time` ) }
						type="time"
						className={ `date-time-picker__time${ is12Hour ? ' date-time-picker__time--12h' : '' }` }
						value={ toInputTime( controlled ) }
						onChange={ handleTimeChange }
						disabled={ disabled }
						aria-label={ label ? `${ label } time` : 'Time' }
						aria-describedby={ help ? `${ id }-help` : undefined }
					/>
				) }
			</div>
			{ help && (
				<p id={ `${ id }-help` } className="date-time-picker__help">
					{ help }
				</p>
			) }
		</div>
	);
}
