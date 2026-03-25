import { useState } from 'react';
import FieldGroup from '../shared/FieldGroup';
import AttributeBuilder from './AttributeBuilder';
import SupportsEditor from './SupportsEditor';
import BlockNamePreview from './BlockNamePreview';

const BLOCK_CATEGORIES = [
	'text', 'media', 'design', 'widgets', 'theme', 'embed',
];

const TABS = [ 'General', 'Attributes', 'Supports', 'Editor Behavior' ];

/**
 * Tabbed form for creating or editing a Gutenberg block.
 *
 * @param {Object}   props
 * @param {Object}   props.block      - The block model.
 * @param {string}   props.namespace  - Plugin namespace for the block name preview.
 * @param {Function} props.onChange   - Called with updated block.
 */
export default function BlockForm( { block, namespace, onChange } ) {
	const [ activeTab, setActiveTab ] = useState( 'General' );

	function update( field, value ) {
		onChange( { ...block, [ field ]: value } );
	}

	function updateEditorBehavior( field, value ) {
		onChange( {
			...block,
			editorBehavior: { ...block.editorBehavior, [ field ]: value },
		} );
	}

	return (
		<div>
			{ block.name && (
				<div style={ { marginBottom: '1rem' } }>
					<BlockNamePreview namespace={ namespace } blockName={ block.name } />
				</div>
			) }

			<div className="iface-tabs" role="tablist">
				{ TABS.map( ( tab ) => (
					<button
						key={ tab }
						type="button"
						role="tab"
						aria-selected={ activeTab === tab }
						className={ `iface-tab${ activeTab === tab ? ' iface-tab--active' : '' }` }
						onClick={ () => setActiveTab( tab ) }
					>
						{ tab }
					</button>
				) ) }
			</div>

			{ activeTab === 'General' && (
				<div
					style={ { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' } }
					role="tabpanel"
				>
					<FieldGroup label="Block Name" required htmlFor="block-name" help="Lowercase, hyphens only. e.g. hero-section">
						<input
							id="block-name"
							type="text"
							value={ block.name }
							onChange={ ( e ) => update( 'name', e.target.value.toLowerCase().replace( /[^a-z0-9-]/, '' ) ) }
							placeholder="hero-section"
						/>
					</FieldGroup>

					<FieldGroup label="Title" required htmlFor="block-title">
						<input
							id="block-title"
							type="text"
							value={ block.title }
							onChange={ ( e ) => update( 'title', e.target.value ) }
							placeholder="Hero Section"
						/>
					</FieldGroup>

					<FieldGroup
						label="Description"
						htmlFor="block-desc"
						className="iface-field-group--full"
					>
						<textarea
							id="block-desc"
							value={ block.description }
							onChange={ ( e ) => update( 'description', e.target.value ) }
							rows={ 2 }
						/>
					</FieldGroup>

					<FieldGroup label="Category" htmlFor="block-category">
						<select
							id="block-category"
							value={ block.category }
							onChange={ ( e ) => update( 'category', e.target.value ) }
						>
							{ BLOCK_CATEGORIES.map( ( c ) => (
								<option key={ c } value={ c }>
									{ c }
								</option>
							) ) }
						</select>
					</FieldGroup>

					<FieldGroup label="Icon" htmlFor="block-icon" help="Dashicon name (e.g. smiley, star-filled)">
						<input
							id="block-icon"
							type="text"
							value={ block.icon }
							onChange={ ( e ) => update( 'icon', e.target.value ) }
							placeholder="smiley"
						/>
					</FieldGroup>
				</div>
			) }

			{ activeTab === 'Attributes' && (
				<div role="tabpanel">
					<AttributeBuilder
						attributes={ block.attributes }
						onChange={ ( attrs ) => update( 'attributes', attrs ) }
					/>
				</div>
			) }

			{ activeTab === 'Supports' && (
				<div role="tabpanel">
					<SupportsEditor
						supports={ block.supports }
						onChange={ ( supports ) => update( 'supports', supports ) }
					/>
				</div>
			) }

			{ activeTab === 'Editor Behavior' && (
				<div role="tabpanel" style={ { display: 'flex', flexDirection: 'column', gap: '0.75rem' } }>
					{ [
						[ 'usesRichText', 'Uses RichText' ],
						[ 'usesInnerBlocks', 'Uses InnerBlocks' ],
						[ 'usesMediaUpload', 'Uses MediaUpload' ],
						[ 'usesInspectorPanel', 'Has InspectorControls panel' ],
						[ 'usesBlockControls', 'Has BlockControls toolbar' ],
					].map( ( [ key, label ] ) => (
						<label key={ key } className="iface-supports-option">
							<input
								type="checkbox"
								checked={ !! block.editorBehavior[ key ] }
								onChange={ ( e ) => updateEditorBehavior( key, e.target.checked ) }
							/>
							{ label }
						</label>
					) ) }

					<div style={ { marginTop: '0.5rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' } }>
						<label className="iface-supports-option">
							<input
								type="checkbox"
								checked={ !! block.viewScript }
								onChange={ ( e ) => onChange( { ...block, viewScript: e.target.checked } ) }
							/>
							Generate view.js (front-end interactivity script)
						</label>
					</div>
				</div>
			) }
		</div>
	);
}
