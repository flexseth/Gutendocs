import { useState } from 'react';

/**
 * Chip-style tag input.
 *
 * Press Enter or comma to add a tag. Backspace removes the last tag.
 *
 * @param {Object}   props
 * @param {string[]} props.tags     - Current tag array.
 * @param {Function} props.onChange - Called with the updated tag array.
 */
export default function PluginTagsInput( { tags = [], onChange } ) {
	const [ input, setInput ] = useState( '' );

	function addTag( raw ) {
		const tag = raw.trim().replace( /,$/, '' ).trim();
		if ( tag && ! tags.includes( tag ) ) {
			onChange( [ ...tags, tag ] );
		}
		setInput( '' );
	}

	function handleKeyDown( e ) {
		if ( e.key === 'Enter' || e.key === ',' ) {
			e.preventDefault();
			addTag( input );
		} else if ( e.key === 'Backspace' && ! input && tags.length > 0 ) {
			onChange( tags.slice( 0, -1 ) );
		}
	}

	function removeTag( tag ) {
		onChange( tags.filter( ( t ) => t !== tag ) );
	}

	return (
		<div
			className="iface-tags-input"
			onClick={ ( e ) => e.currentTarget.querySelector( 'input' ).focus() }
		>
			{ tags.map( ( tag ) => (
				<span key={ tag } className="iface-tags-input__tag">
					{ tag }
					<button
						type="button"
						className="iface-tags-input__remove"
						onClick={ () => removeTag( tag ) }
						aria-label={ `Remove tag ${ tag }` }
					>
						×
					</button>
				</span>
			) ) }
			<input
				className="iface-tags-input__field"
				value={ input }
				onChange={ ( e ) => setInput( e.target.value ) }
				onKeyDown={ handleKeyDown }
				onBlur={ () => input && addTag( input ) }
				placeholder={ tags.length === 0 ? 'Add tags…' : '' }
				aria-label="Add a tag"
			/>
		</div>
	);
}
