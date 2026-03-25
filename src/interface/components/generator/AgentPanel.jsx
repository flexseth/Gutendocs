import { useState } from 'react';

/**
 * Inline agent content strings. Defined here since .agent.md files are plain text.
 * In production, these can be imported via Vite's ?raw suffix.
 */
const AGENTS = [
	{
		id: 'optimization',
		title: 'Optimization Agent',
		content: `Role: Security, performance, WPCS compliance.

Key responsibilities:
- Review generated PHP for nonce verification, capability checks, sanitization, escaping.
- Ensure assets are conditionally loaded and registered properly.
- Validate against Plugin Check Plugin (PCP) standards.
- Check for N+1 query patterns and add caching where appropriate.
- Run PHPCS with WordPress-Extra ruleset before submission.`,
	},
	{
		id: 'development',
		title: 'Development Agent',
		content: `Role: UI/UX developer for WordPress blocks and plugins.

Key responsibilities:
- Implement edit.js and save.js using block-editor hooks.
- Follow block.json apiVersion 3 patterns.
- Use useBlockProps(), InnerBlocks, RichText, InspectorControls as needed.
- Ensure all outputs are functional components with ES6+ syntax.
- Generate view.js for interactive front-end behaviour when viewScript is enabled.`,
	},
	{
		id: 'documentation',
		title: 'Documentation Agent',
		content: `Role: Technical documentation writer.

Key responsibilities:
- Add PHPDoc blocks to all PHP functions and classes.
- Add JSDoc comments to all JavaScript exports.
- Write a README.txt in wordpress.org submission format.
- Maintain a CHANGELOG.md in Keep a Changelog format.
- Comment complex logic inline.`,
	},
	{
		id: 'testing',
		title: 'Testing Agent',
		content: `Role: Quality assurance and automated testing.

Key responsibilities:
- Write PHPUnit tests for block registration and PHP functions.
- Write Jest + @testing-library/react tests for JS components.
- Write Playwright E2E tests using @wordpress/e2e-test-utils-playwright.
- Run axe-core accessibility checks on block editor output.
- Confirm all blocks pass the WordPress block validator.`,
	},
	{
		id: 'compatibility',
		title: 'Compatibility Agent',
		content: `Role: Cross-version compatibility assurance.

Key responsibilities:
- Verify plugin header Requires at least matches actual API usage.
- Check PHP 7.4 compatibility (no PHP 8-only syntax unless intended).
- Confirm block apiVersion 3 features are available in WP 6.4+.
- Test in both classic themes and FSE/block themes.
- Validate theme.json compatibility when using theme.json features.`,
	},
	{
		id: 'integration',
		title: 'Integration Agent',
		content: `Role: Third-party plugin and theme integration.

Key responsibilities:
- Add conditional Gravity Forms block integration when GF is active.
- Ensure WooCommerce product/cart block compatibility where relevant.
- Verify The Events Calendar data hooks are not conflicting.
- Test with Astra, Kadence, GeneratePress, Blocksy themes.
- Avoid hardcoded CSS colours that conflict with theme.json palettes.`,
	},
];

/**
 * Collapsible panel displaying all agent configuration summaries.
 */
export default function AgentPanel() {
	const [ isOpen, setIsOpen ] = useState( false );

	return (
		<div className="iface-agent-panel">
			<div
				className="iface-agent-panel__header"
				onClick={ () => setIsOpen( ( o ) => ! o ) }
				role="button"
				tabIndex={ 0 }
				onKeyDown={ ( e ) => e.key === 'Enter' && setIsOpen( ( o ) => ! o ) }
				aria-expanded={ isOpen }
			>
				<h3>Agent Configurations</h3>
				<span>{ isOpen ? '▲' : '▼' }</span>
			</div>
			{ isOpen && (
				<div className="iface-agent-panel__body">
					{ AGENTS.map( ( agent ) => (
						<div key={ agent.id } className="iface-agent-panel__agent">
							<h4>{ agent.title }</h4>
							<pre>{ agent.content }</pre>
						</div>
					) ) }
				</div>
			) }
		</div>
	);
}
