/**
 * Simulated media upload component with a render-prop interface.
 *
 * Mirrors the WordPress `MediaUpload` component from `@wordpress/block-editor`.
 * In the real block editor this opens the WordPress Media Library. Here it
 * renders a mock media picker overlay so documentation demos can show the
 * full upload/select/replace workflow without a WordPress environment.
 *
 * Usage matches the real API: pass a `render` function that receives `{ open }`
 * and call `open()` to trigger the picker. `onSelect` receives a media object
 * with `{ id, url, alt, type }` when the user confirms a selection.
 *
 * @param {Object}          props
 * @param {Function}        props.render          - Render prop — receives `{ open }`.
 * @param {Function}        props.onSelect        - Called with the selected media object.
 * @param {string[]}        [props.allowedTypes]  - Allowed media types: 'image', 'video', 'audio'.
 * @param {number|string}   [props.value]         - Currently selected media ID or URL.
 * @param {boolean}         [props.multiple=false] - Allow multiple selections.
 * @param {boolean}         [props.gallery=false]  - Show gallery layout for multiple select.
 */
import { useState } from 'react';

const MOCK_MEDIA = [
	{ id: 1, url: 'https://picsum.photos/seed/wp1/400/300', alt: 'Sample image 1', type: 'image' },
	{ id: 2, url: 'https://picsum.photos/seed/wp2/400/300', alt: 'Sample image 2', type: 'image' },
	{ id: 3, url: 'https://picsum.photos/seed/wp3/400/300', alt: 'Sample image 3', type: 'image' },
	{ id: 4, url: 'https://picsum.photos/seed/wp4/400/300', alt: 'Sample image 4', type: 'image' },
	{ id: 5, url: 'https://picsum.photos/seed/wp5/400/300', alt: 'Sample image 5', type: 'image' },
	{ id: 6, url: 'https://picsum.photos/seed/wp6/400/300', alt: 'Sample image 6', type: 'image' },
];

export default function MediaUpload( {
	render,
	onSelect,
	allowedTypes = [ 'image' ],
	value,
	multiple = false,
	gallery = false,
} ) {
	const [ isOpen, setIsOpen ] = useState( false );
	const [ selected, setSelected ] = useState( [] );

	const filteredMedia = MOCK_MEDIA.filter( ( item ) =>
		allowedTypes.includes( item.type )
	);

	const open = () => {
		setSelected( [] );
		setIsOpen( true );
	};

	const handleSelect = ( item ) => {
		if ( multiple ) {
			setSelected( ( prev ) =>
				prev.find( ( s ) => s.id === item.id )
					? prev.filter( ( s ) => s.id !== item.id )
					: [ ...prev, item ]
			);
		} else {
			onSelect( item );
			setIsOpen( false );
		}
	};

	const handleConfirm = () => {
		if ( multiple && selected.length > 0 ) {
			onSelect( selected );
		}
		setIsOpen( false );
	};

	const handleOverlayClick = ( event ) => {
		if ( event.target === event.currentTarget ) {
			setIsOpen( false );
		}
	};

	return (
		<>
			{ render( { open } ) }

			{ isOpen && (
				<div
					className="media-upload__overlay"
					onClick={ handleOverlayClick }
					role="presentation"
				>
					<div className="media-upload__dialog" role="dialog" aria-modal="true" aria-label="Media Library">
						<div className="media-upload__header">
							<h2 className="media-upload__title">Media Library</h2>
							<div className="media-upload__tabs">
								<button type="button" className="media-upload__tab media-upload__tab--active">
									Media Library
								</button>
								<button type="button" className="media-upload__tab">
									Upload Files
								</button>
							</div>
							<button
								type="button"
								className="media-upload__close"
								aria-label="Close media library"
								onClick={ () => setIsOpen( false ) }
							>
								&times;
							</button>
						</div>

						<div className="media-upload__body">
							<div className="media-upload__grid">
								{ filteredMedia.map( ( item ) => {
									const isSelected = multiple
										? selected.some( ( s ) => s.id === item.id )
										: value === item.id;
									return (
										<button
											key={ item.id }
											type="button"
											className={ [
												'media-upload__item',
												isSelected ? 'media-upload__item--selected' : '',
											].filter( Boolean ).join( ' ' ) }
											onClick={ () => handleSelect( item ) }
											aria-pressed={ isSelected }
										>
											<img
												src={ item.url }
												alt={ item.alt }
												className="media-upload__thumbnail"
											/>
											{ isSelected && (
												<span className="media-upload__check" aria-hidden="true">✓</span>
											) }
										</button>
									);
								} ) }
							</div>
						</div>

						<div className="media-upload__footer">
							<button
								type="button"
								className="media-upload__cancel"
								onClick={ () => setIsOpen( false ) }
							>
								Cancel
							</button>
							{ multiple && (
								<button
									type="button"
									className="media-upload__confirm"
									onClick={ handleConfirm }
									disabled={ selected.length === 0 }
								>
									{ selected.length > 0
										? `Select ${ selected.length } item${ selected.length > 1 ? 's' : '' }`
										: 'Select'
									}
								</button>
							) }
						</div>
					</div>
				</div>
			) }
		</>
	);
}
