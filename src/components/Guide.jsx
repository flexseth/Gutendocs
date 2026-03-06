import { useState, useEffect } from 'react';

/**
 * Multi-step tutorial modal that walks users through a series of pages.
 *
 * Mirrors the WordPress `Guide` component from `@wordpress/components`.
 * Renders an overlay modal with Previous / Next / Finish navigation and
 * dot-based page indicators. Body scroll is locked while open.
 *
 * @param {Object}          props
 * @param {string}          props.contentLabel                 - Accessible modal label (required).
 * @param {Function}        props.onFinish                     - Callback when closed or finished (required).
 * @param {Array}           [props.pages=[]]                   - Array of `{ content, image }` page objects.
 * @param {string}          [props.finishButtonText='Finish']  - Label for the last-page action button.
 * @param {string}          [props.nextButtonText='Next']      - Label for the forward navigation button.
 * @param {string}          [props.previousButtonText='Previous'] - Label for the back navigation button.
 * @param {string}          [props.className='']               - Additional CSS classes on the modal.
 */
export default function Guide( {
	contentLabel,
	onFinish,
	pages = [],
	finishButtonText = 'Finish',
	nextButtonText = 'Next',
	previousButtonText = 'Previous',
	className = '',
} ) {
	const [ currentPage, setCurrentPage ] = useState( 0 );
	const total = pages.length;
	const isFirst = currentPage === 0;
	const isLast = currentPage === total - 1;
	const page = pages[ currentPage ] || {};

	// Lock body scroll while the guide is mounted.
	useEffect( () => {
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		const handleKeyDown = ( event ) => {
			if ( event.key === 'Escape' && onFinish ) {
				onFinish();
			}
			if ( event.key === 'ArrowRight' && ! isLast ) {
				setCurrentPage( ( p ) => p + 1 );
			}
			if ( event.key === 'ArrowLeft' && ! isFirst ) {
				setCurrentPage( ( p ) => p - 1 );
			}
		};

		document.addEventListener( 'keydown', handleKeyDown );

		return () => {
			document.body.style.overflow = previousOverflow;
			document.removeEventListener( 'keydown', handleKeyDown );
		};
	}, [ onFinish, isFirst, isLast ] );

	const handleOverlayClick = ( event ) => {
		if ( event.target === event.currentTarget && onFinish ) {
			onFinish();
		}
	};

	const dialogClass = [ 'guide__dialog', className ].filter( Boolean ).join( ' ' );

	return (
		<div
			className="guide__overlay"
			onClick={ handleOverlayClick }
			role="presentation"
		>
			<div
				className={ dialogClass }
				role="dialog"
				aria-modal="true"
				aria-label={ contentLabel }
			>
				{ /* Close button */ }
				<button
					type="button"
					className="guide__close"
					aria-label="Close guide"
					onClick={ onFinish }
				>
					&times;
				</button>

				{ /* Page image */ }
				{ page.image && (
					<div className="guide__image">
						{ page.image }
					</div>
				) }

				{ /* Page content */ }
				<div className="guide__content">
					{ page.content }
				</div>

				{ /* Dot indicators */ }
				{ total > 1 && (
					<div className="guide__dots" aria-label={ `Page ${ currentPage + 1 } of ${ total }` }>
						{ pages.map( ( _, index ) => (
							<button
								key={ index }
								type="button"
								className={ [
									'guide__dot',
									index === currentPage ? 'guide__dot--active' : '',
								].filter( Boolean ).join( ' ' ) }
								aria-label={ `Go to page ${ index + 1 }` }
								onClick={ () => setCurrentPage( index ) }
							/>
						) ) }
					</div>
				) }

				{ /* Navigation */ }
				<div className="guide__nav">
					<button
						type="button"
						className="guide__btn guide__btn--prev"
						onClick={ () => setCurrentPage( ( p ) => p - 1 ) }
						disabled={ isFirst }
					>
						{ previousButtonText }
					</button>

					{ isLast ? (
						<button
							type="button"
							className="guide__btn guide__btn--finish"
							onClick={ onFinish }
						>
							{ finishButtonText }
						</button>
					) : (
						<button
							type="button"
							className="guide__btn guide__btn--next"
							onClick={ () => setCurrentPage( ( p ) => p + 1 ) }
						>
							{ nextButtonText }
						</button>
					) }
				</div>
			</div>
		</div>
	);
}
