import { useState, useCallback } from 'react';

/**
 * A hook that persists state to localStorage.
 *
 * Falls back to in-memory state when localStorage is unavailable.
 *
 * @param {string} key       The localStorage key.
 * @param {*}      initial   The default value when no stored value exists.
 * @return {[*, Function]}   A stateful value and its setter.
 */
export function useLocalStorage( key, initial ) {
	const [ storedValue, setStoredValue ] = useState( () => {
		try {
			const item = window.localStorage.getItem( key );
			if ( item === null ) {
				return initial;
			}
			const parsed = JSON.parse( item );
			// Validate that the stored value matches the expected type.
			if ( initial !== undefined && initial !== null ) {
				if ( Array.isArray( initial ) !== Array.isArray( parsed ) ) {
					return initial;
				}
				if ( typeof parsed !== typeof initial ) {
					return initial;
				}
			}
			return parsed;
		} catch {
			return initial;
		}
	} );

	const setValue = useCallback(
		( value ) => {
			const valueToStore =
				typeof value === 'function' ? value( storedValue ) : value;
			setStoredValue( valueToStore );
			try {
				window.localStorage.setItem(
					key,
					JSON.stringify( valueToStore )
				);
			} catch {
				// Storage full or unavailable — state still updates in memory.
			}
		},
		[ key, storedValue ]
	);

	return [ storedValue, setValue ];
}
