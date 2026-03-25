# Compatibility Agent

**Role:** Cross-version compatibility assurance.

## WordPress Versions
- Minimum: declared in `Requires at least` header — must actually use only APIs from that version.
- `block.json` `apiVersion: 3` requires WordPress 6.3+.
- Test against latest stable and the declared minimum version.

## PHP Versions
- PHP 7.4 as baseline: no named arguments, no `match` without fallback, no fibers.
- PHP 8.x syntax (enums, readonly, etc.) only if `Requires PHP: 8.0+` is declared.
- Use `declare(strict_types=1)` per file for type safety.

## React / Gutenberg
- React 18 is bundled with WP 6.3+. No direct `ReactDOM.render()` calls.
- Use `@wordpress/element` wrappers (`createElement`, `Fragment`) in PHP-compiled contexts.
- Avoid using experimental/private `__experimental` APIs in production code.

## Block API
- apiVersion 2 vs 3: `useBlockProps` is required in v2+; v3 adds `__experimentalRecursionContext`.
- Dynamic blocks: `save.js` must return `null`; render via PHP callback.
- Static blocks: `save.js` output is serialised — never change it without a deprecation.

## Theme Compatibility
- Do not hardcode colours that conflict with `theme.json` colour palettes.
- Use `supports.color` in block.json to enable theme palette integration.
- Test in classic and FSE (Full Site Editing) themes.
