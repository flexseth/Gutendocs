import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save component for Math Rock.
 *
 * Renders the stored equation and its result as static markup.
 *
 * @param {Object} props            - Block props.
 * @param {Object} props.attributes - Block attributes.
 * @return {JSX.Element} Saved block markup.
 */
export default function save( { attributes } ) {
	const blockProps = useBlockProps.save( { className: 'mathrock' } );
	const { num1, num2 } = attributes;

	return (
		<div { ...blockProps }>
			<span className="mathrock__operand">{ num1 }</span>
			<span className="mathrock__operator">+</span>
			<span className="mathrock__operand">{ num2 }</span>
			<span className="mathrock__equals">=</span>
			<span className="mathrock__result">{ num1 + num2 }</span>
		</div>
	);
}
