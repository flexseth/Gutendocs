import FieldGroup from '../shared/FieldGroup';
import PluginTagsInput from './PluginTagsInput';
import PluginSlugPreview from './PluginSlugPreview';
import { toSlug } from './PluginSlugPreview';

/**
 * Controlled form for editing plugin metadata.
 *
 * @param {Object}   props
 * @param {Object}   props.plugin   - The plugin metadata object.
 * @param {Function} props.onChange - Called with the updated plugin object.
 */
export default function PluginMetaForm( { plugin, onChange } ) {
	function update( field, value ) {
		const updated = { ...plugin, [ field ]: value };
		// Auto-sync slug, textDomain, namespace from name when they haven't been customised.
		if ( field === 'name' ) {
			const slug = toSlug( value );
			if ( ! plugin.slug || plugin.slug === toSlug( plugin.name ) ) {
				updated.slug = slug;
			}
			if ( ! plugin.textDomain || plugin.textDomain === toSlug( plugin.name ) ) {
				updated.textDomain = slug;
			}
			if ( ! plugin.namespace || plugin.namespace === toSlug( plugin.name ) ) {
				updated.namespace = slug;
			}
		}
		onChange( updated );
	}

	return (
		<div className="iface-plugin-form">
			<FieldGroup
				label="Plugin Name"
				required
				htmlFor="plugin-name"
				className="iface-field-group--full"
			>
				<input
					id="plugin-name"
					type="text"
					value={ plugin.name }
					onChange={ ( e ) => update( 'name', e.target.value ) }
					placeholder="My Awesome Plugin"
				/>
			</FieldGroup>

			{ plugin.name && (
				<div className="iface-field-group--full">
					<PluginSlugPreview name={ plugin.name } />
				</div>
			) }

			<FieldGroup
				label="Description"
				htmlFor="plugin-desc"
				className="iface-field-group--full"
			>
				<textarea
					id="plugin-desc"
					value={ plugin.description }
					onChange={ ( e ) => update( 'description', e.target.value ) }
					placeholder="Brief description of what your plugin does."
					rows={ 3 }
				/>
			</FieldGroup>

			<FieldGroup label="Author" htmlFor="plugin-author">
				<input
					id="plugin-author"
					type="text"
					value={ plugin.author }
					onChange={ ( e ) => update( 'author', e.target.value ) }
					placeholder="Your Name"
				/>
			</FieldGroup>

			<FieldGroup label="Author URI" htmlFor="plugin-author-uri">
				<input
					id="plugin-author-uri"
					type="url"
					value={ plugin.authorUri }
					onChange={ ( e ) => update( 'authorUri', e.target.value ) }
					placeholder="https://example.com"
				/>
			</FieldGroup>

			<FieldGroup label="Plugin URI" htmlFor="plugin-uri">
				<input
					id="plugin-uri"
					type="url"
					value={ plugin.pluginUri }
					onChange={ ( e ) => update( 'pluginUri', e.target.value ) }
					placeholder="https://example.com/my-plugin"
				/>
			</FieldGroup>

			<FieldGroup label="Version" htmlFor="plugin-version">
				<input
					id="plugin-version"
					type="text"
					value={ plugin.version }
					onChange={ ( e ) => update( 'version', e.target.value ) }
					placeholder="1.0.0"
				/>
			</FieldGroup>

			<FieldGroup label="Requires WordPress" htmlFor="plugin-requires-wp">
				<input
					id="plugin-requires-wp"
					type="text"
					value={ plugin.requiresWp }
					onChange={ ( e ) => update( 'requiresWp', e.target.value ) }
					placeholder="6.4"
				/>
			</FieldGroup>

			<FieldGroup label="Requires PHP" htmlFor="plugin-requires-php">
				<input
					id="plugin-requires-php"
					type="text"
					value={ plugin.requiresPhp }
					onChange={ ( e ) => update( 'requiresPhp', e.target.value ) }
					placeholder="7.4"
				/>
			</FieldGroup>

			<FieldGroup label="Text Domain" htmlFor="plugin-text-domain">
				<input
					id="plugin-text-domain"
					type="text"
					value={ plugin.textDomain }
					onChange={ ( e ) => update( 'textDomain', e.target.value ) }
					placeholder="my-plugin"
				/>
			</FieldGroup>

			<FieldGroup label="Namespace" htmlFor="plugin-namespace" help="Used as block prefix, e.g. my-plugin/hero">
				<input
					id="plugin-namespace"
					type="text"
					value={ plugin.namespace }
					onChange={ ( e ) => update( 'namespace', e.target.value ) }
					placeholder="my-plugin"
				/>
			</FieldGroup>

			<FieldGroup label="License" htmlFor="plugin-license">
				<select
					id="plugin-license"
					value={ plugin.license }
					onChange={ ( e ) => update( 'license', e.target.value ) }
				>
					<option value="GPL-2.0-or-later">GPL-2.0-or-later</option>
					<option value="GPL-3.0-or-later">GPL-3.0-or-later</option>
					<option value="MIT">MIT</option>
					<option value="Apache-2.0">Apache-2.0</option>
				</select>
			</FieldGroup>

			<FieldGroup label="Tags" className="iface-field-group--full" help="Press Enter or comma to add a tag.">
				<PluginTagsInput
					tags={ plugin.tags }
					onChange={ ( tags ) => update( 'tags', tags ) }
				/>
			</FieldGroup>

			<FieldGroup label="Has Blocks" htmlFor="plugin-has-blocks" className="iface-field-group--full">
				<label style={ { display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' } }>
					<input
						id="plugin-has-blocks"
						type="checkbox"
						checked={ plugin.hasBlocks }
						onChange={ ( e ) => update( 'hasBlocks', e.target.checked ) }
					/>
					This plugin registers Gutenberg blocks
				</label>
			</FieldGroup>
		</div>
	);
}
