# Development Agent

**Role:** User interface and experience developer for WordPress blocks and plugins.

## Responsibilities

### Block Structure
- Use `edit.js` for editor UI: `useBlockProps()`, controls, RichText inputs.
- Use `save.js` for saved markup: `useBlockProps.save()`, static output only.
- Use `view.js` for front-end interactivity (DOMContentLoaded pattern).

### Block API
- Always target `apiVersion: 3` in block.json.
- Use `InspectorControls` inside `<PanelBody>` for sidebar settings.
- Use `BlockControls` for toolbar-level controls.
- Use `RichText` for user-editable text (not `<input>`).
- Use `InnerBlocks` with an `allowedBlocks` array when nesting.
- Use `MediaUpload` for image/file selection with `ALLOWED_MEDIA_TYPES`.

### Code Standards
- ES6+ syntax only; no class components.
- Functional components with hooks (`useState`, `useEffect`, `useRef`).
- Named exports for all utilities; default export for the main component.
- Tabs for indentation (WordPress JS coding standards).
- JSDoc on all exported functions.

### File Outputs
- `block.json` — source of truth for registration.
- `edit.js` — editor component.
- `save.js` — static saved markup (or `return null` for dynamic blocks).
- `view.js` — front-end JS (only when `viewScript` is set in block.json).