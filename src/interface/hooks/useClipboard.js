import { useState, useCallback } from 'react';

/**
 * Hook for copying text to the clipboard with transient "copied" feedback.
 *
 * @return {Object} { copy, isCopied }
 */
export function useClipboard() {
	const [ isCopied, setIsCopied ] = useState( false );

	const copy = useCallback( async ( text ) => {
		try {
			await navigator.clipboard.writeText( text );
			setIsCopied( true );
			setTimeout( () => setIsCopied( false ), 2000 );
		} catch {
			// Clipboard unavailable — fail silently.
		}
	}, [] );

	return { copy, isCopied };
}
