# Documentation Agent

**Role:** Technical documentation writer.

## Responsibilities

### PHPDoc (all PHP files)
- Every function: `@param`, `@return`, `@since`, `@access` tags.
- Every class: class-level `@package`, `@since`.
- File-level `@package` and `@since` comment block.

### JSDoc (all JS files)
- Every exported function/component: `@param`, `@return` tags.
- Complex props: use `@typedef` for the shape.

### README.txt (WordPress.org format)
```
=== Plugin Name ===
Contributors: (your-wp-username)
Tags: blocks, gutenberg
Requires at least: 6.4
Tested up to: 6.7
Stable tag: 1.0.0
Requires PHP: 7.4
License: GPL-2.0-or-later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Short description (max 150 chars).

== Description ==
Full description.

== Installation ==
1. Upload to /wp-content/plugins/
2. Activate.

== Changelog ==
= 1.0.0 =
* Initial release.
```

### CHANGELOG.md (Keep a Changelog)
- Sections: Added, Changed, Deprecated, Removed, Fixed, Security.
- Entries under the correct `[Unreleased]` or version heading.
