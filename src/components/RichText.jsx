/**
 * Editable rich text field with inline formatting controls.
 *
 * Mirrors the WordPress `RichText` component from `@wordpress/block-editor`.
 * In the real block editor this integrates deeply with Gutenberg's format
 * API. Here it renders a `contenteditable` element with a basic formatting
 * toolbar (bold, italic, link) so documentation demos can show the editing
 * experience without a WordPress environment.
 *
 * The `value` / `onChange` interface matches the real component: `value` is
 * an HTML string and `onChange` receives an updated HTML string.
 *
 * @param {Object}          props
 * @param {string}          [props.tagName='p']             - HTML tag for the editable element.
 * @param {string}          [props.value='']                - Current content as an HTML string.
 * @param {Function}        props.onChange                  - Callback with updated HTML string.
 * @param {string}          [props.placeholder='']          - Placeholder text when empty.
 * @param {string[]}        [props.allowedFormats]          - Allowed format types. Empty array disables toolbar.
 * @param {boolean}         [props.keepPlaceholderOnFocus=false] - Keep placeholder visible on focus.
 * @param {string}          [props.className='']            - Additional CSS class names.
 * @param {Object}          [props.style]                   - Inline styles for the editable element.
 * @param {boolean}         [props.disabled=false]          - Disables editing.
 */
import { useRef, useEffect, useState } from 'react';

const ALL_FORMATS = [ 'core/bold', 'core/italic', 'core/link' ];

function FormatButton( { command, label, children, onFormat } ) {
	return (
		<button
			type="button"
			className="rich-text__format-btn"
			aria-label={ label }
			onMouseDown={ ( e ) => {
				e.preventDefault();
				onFormat( command );
			} }
		>
			{ children }
		</button>
	);
}

export default function RichText( {
	tagName: Tag = 'p',
	value = '',
	onChange,
	placeholder = '',
	allowedFormats = ALL_FORMATS,
	keepPlaceholderOnFocus = false,
	className = '',
	style,
	disabled = false,
} ) {
	const editableRef = useRef( null );
	const [ isFocused, setIsFocused ] = useState( false );

	// Sync external value changes without resetting cursor position.
	useEffect( () => {
		const el = editableRef.current;
		if ( el && el.innerHTML !== value ) {
			el.innerHTML = value || '';
		}
	}, [ value ] );

	const showPlaceholder = ! value && ( ! isFocused || keepPlaceholderOnFocus );
	const showToolbar = allowedFormats.length > 0 && isFocused && ! disabled;

	const handleInput = () => {
		if ( editableRef.current && onChange ) {
			onChange( editableRef.current.innerHTML );
		}
	};

	const handleFormat = ( command ) => {
		editableRef.current?.focus();
		document.execCommand( command, false, null );
		handleInput();
	};

	const editableClass = [
		'rich-text__editable',
		showPlaceholder ? 'rich-text__editable--empty' : '',
		className,
	].filter( Boolean ).join( ' ' );

	return (
		<div className="rich-text">
			{ showToolbar && (
				<div className="rich-text__toolbar" role="toolbar" aria-label="Text formatting">
					{ allowedFormats.includes( 'core/bold' ) && (
						<FormatButton command="bold" label="Bold" onFormat={ handleFormat }>
							<strong>B</strong>
						</FormatButton>
					) }
					{ allowedFormats.includes( 'core/italic' ) && (
						<FormatButton command="italic" label="Italic" onFormat={ handleFormat }>
							<em>I</em>
						</FormatButton>
					) }
					{ allowedFormats.includes( 'core/strikethrough' ) && (
						<FormatButton command="strikeThrough" label="Strikethrough" onFormat={ handleFormat }>
							<s>S</s>
						</FormatButton>
					) }
				</div>
			) }

			<Tag
				ref={ editableRef }
				className={ editableClass }
				style={ style }
				contentEditable={ ! disabled }
				suppressContentEditableWarning
				data-placeholder={ showPlaceholder ? placeholder : undefined }
				onInput={ handleInput }
				onFocus={ () => setIsFocused( true ) }
				onBlur={ () => setIsFocused( false ) }
				aria-label={ placeholder || undefined }
				aria-multiline={ Tag !== 'p' && Tag !== 'h1' && Tag !== 'h2' }
			/>
		</div>
	);
}

/**
 * Static output for save.js — renders the stored HTML string without editing.
 *
 * @param {Object} props
 * @param {string} [props.tagName='p'] - HTML tag.
 * @param {string} [props.value='']   - Stored HTML string.
 * @param {string} [props.className=''] - Additional CSS class names.
 * @param {Object} [props.style]      - Inline styles.
 */
RichText.Content = function RichTextContent( {
	tagName: Tag = 'p',
	value = '',
	className = '',
	style,
} ) {
	return (
		<Tag
			className={ className || undefined }
			style={ style }
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	);
};
