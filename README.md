# Gutendocs

A Vite + React + MDX documentation system for WordPress block and plugin development. Write component docs in Markdown with live interactive demos powered by React.

**[Live Demo →](https://gutendocs.vercel.app/)**

## Quick Start

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` — you'll see the sidebar navigation and live MDX-rendered documentation with interactive React components.


*NOTE:* Install the [MDX extension](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx#:~:text=Install,support%20for%20MDX%20code%20blocks.) from *unified* for syntax highlighting in VS Code. 

## Project Structure

| File | Purpose |
|---|---|
| `package.json` | Project config with all dependencies |
| `vite.config.js` | Vite + MDX plugin + remark-gfm |
| `index.html` | HTML entry point |
| `src/main.jsx` | React entry with Router + MDXProvider |
| `src/App.jsx` | Routes for each MDX doc page |
| `src/components/` | All documented components (see below) |
| `src/components/index.js` | Barrel export |
| `src/providers/MDXComponents.jsx` | MDXProvider mapping markdown elements + custom components |
| `src/layouts/DocLayout.jsx` | Sidebar navigation + content area |
| `src/hooks/useLocalStorage.js` | `useState` drop-in with localStorage persistence |
| `src/styles/docs.css` | Full styling for layout, components, and responsive |
| `src/docs/` | MDX documentation pages |
| `USAGE.md` | WordPress porting strategy guide |

## Components

All components mirror their `@wordpress/components` counterparts and are available globally in every `.mdx` file — no imports needed.

| Component | Description | Docs |
|---|---|---|
| `Alert` | Callout with `info`, `warning`, `success`, `error` variants | `/docs/alert` |
| `BaseControl` | Foundational wrapper for custom form controls | `/docs/base-control` |
| `BlockControls` | Visual simulation of the WordPress BlockControls toolbar slot | `/docs/block-controls` |
| `BoxControl` | Four-sided padding/margin/border control for CSS box model properties | `/docs/box-control` |
| `Button` | Primary / secondary / outline, three sizes | `/docs/button` |
| `ButtonGroup` | Groups related buttons visually into a single cohesive unit | `/docs/button-group` |
| `Card` | Bordered container with optional title | `/docs/card` |
| `CheckboxControl` | Checkbox input for boolean and multi-select settings | `/docs/checkbox-control` |
| `CodeBlock` | Syntax-highlighted code with Night Owl theme | — |
| `CodeTabs` | Tabbed multi-language code viewer | — |
| `ColorPalette` | Color swatch grid with optional custom picker | `/docs/color-palette` |
| `ColorPicker` | Free-form color input with spectrum canvas and hex text input | `/docs/color-picker` |
| `ComboboxControl` | Searchable autocomplete dropdown for selecting from long option lists | `/docs/combobox-control` |
| `CustomSelectControl` | Improved custom select dropdown with keyboard navigation | `/docs/custom-select-control` |
| `DateTimePicker` | Date/time picker with `dateOnly` / `timeOnly` modes | `/docs/date-time-picker` |
| `Dropdown` | Composable dropdown with a custom trigger and floating panel | `/docs/dropdown` |
| `DropdownMenu` | Pre-built dropdown menu with trigger button and controls array | `/docs/dropdown-menu` |
| `Flex` / `FlexItem` / `FlexBlock` | CSS flexbox layout helper components | `/docs/flex` |
| `FocalPointPicker` | Image with a draggable crosshair to set a focal point | `/docs/focal-point-picker` |
| `FontSizePicker` | Font size selector with preset buttons and optional custom input | `/docs/font-size-picker` |
| `FormTokenField` | Multi-value token/tag input with optional autocomplete suggestions | `/docs/form-token-field` |
| `Guide` | Multi-step tutorial modal that walks users through a series of pages | `/docs/guide` |
| `InspectorControls` | Visual simulation of the WordPress InspectorControls sidebar slot | `/docs/inspector-controls` |
| `MediaUpload` | Simulated media upload component with a render-prop interface | `/docs/media-upload` |
| `Modal` | Focus-trapped dialog overlay for confirmations, forms, and settings | `/docs/modal` |
| `Notice` | Contextual status notice with optional dismiss button | `/docs/notice` |
| `NumberControl` | Numeric text input with increment/decrement spin buttons | `/docs/number-control` |
| `PanelBody` | Collapsible panel section with a clickable title header | `/docs/panel-body` |
| `Placeholder` | Empty-state UI container for blocks that have not been configured | `/docs/placeholder` |
| `Popover` | Floating container anchored to a reference element | `/docs/popover` |
| `PropsTable` | Renders a props documentation table from structured data | — |
| `RadioControl` | Radio button group for selecting a single option from a set | `/docs/radio-control` |
| `RangeControl` | Numeric slider with paired input field | `/docs/range-control` |
| `RichText` | Editable rich text field with inline formatting controls | `/docs/rich-text` |
| `SearchControl` | Search input with a clear (×) button | `/docs/search-control` |
| `SelectControl` | Dropdown select | `/docs/select-control` |
| `Snackbar` | Brief, dismissible toast notification | `/docs/snackbar` |
| `Spacer` | Flexible spacing utility for controlled gaps between elements | `/docs/spacer` |
| `Spinner` | Animated loading indicator for async operations | `/docs/spinner` |
| `TabPanel` | Tab switcher with a callback-based render-prop API | `/docs/tab-panel` |
| `Tabs` | Modern slot-based tab component (Tabs.TabList, Tabs.Tab, Tabs.TabPanel) | `/docs/tabs` |
| `TextareaControl` | Multi-line text input for longer content | `/docs/textarea-control` |
| `TextControl` | Single-line text input | `/docs/text-control` |
| `ToggleControl` | Boolean toggle switch | `/docs/toggle-control` |
| `ToggleGroupControl` / `ToggleGroupControlOption` / `ToggleGroupControlOptionIcon` | Radio-style group of toggle buttons | `/docs/toggle-group-control` |
| `ToolsPanel` / `ToolsPanelItem` | Sidebar panel that lets users show/hide individual controls | `/docs/tools-panel` |
| `Tooltip` | Hover-triggered tooltip wrapper | `/docs/tooltip` |
| `UnitControl` | Numeric input paired with a unit selector for CSS dimension values | `/docs/unit-control` |

## Features

### MDX Compilation
`.mdx` files compile to React components at build time via `@mdx-js/rollup` — no runtime overhead.

### Global Component Injection
`MDXComponentsProvider` in `src/providers/MDXComponents.jsx` maps standard markdown elements (`h1`–`h6`, `code`, `pre`, `table`, `a`) to styled versions, and makes all custom components available in every `.mdx` file without imports.

### Persistent Demos
All interactive demos use `useLocalStorage` — a drop-in for `useState` that reads and writes `localStorage`. Demo state survives page reloads.

### GitHub Flavored Markdown
`remark-gfm` enables tables, task lists, and strikethrough in all `.mdx` files.

## Key Dependencies

- **react / react-dom** — React 18+
- **@mdx-js/rollup** — Vite/Rollup MDX plugin
- **@mdx-js/react** — MDXProvider for component injection
- **remark-gfm** — GitHub Flavored Markdown
- **react-router-dom** — Page routing
- **vite** — Dev server and bundler

## MDX Resources

- [mdxjs.com](https://mdxjs.com/) — Official MDX documentation
- [What is MDX?](https://mdxjs.com/docs/what-is-mdx/) — Overview of the format
- [Getting Started](https://mdxjs.com/docs/getting-started/) — Setup guides for various bundlers
- [Using MDX](https://mdxjs.com/docs/using-mdx/) — Component injection, layouts, and provider patterns
- [Extending MDX](https://mdxjs.com/docs/extending-mdx/) — Remark/rehype plugins
- [Packages](https://mdxjs.com/packages/) — `@mdx-js/rollup`, `@mdx-js/react`, and integrations
- [Playground](https://mdxjs.com/playground/) — Interactive MDX editor in the browser

## WordPress Porting

See [USAGE.md](./USAGE.md) for the full WordPress porting strategy, including:
- How MDXProvider maps to WordPress block context
- Server-side MDX compilation via `@mdx-js/mdx`
- Component mapping from custom components to `@wordpress/components`
- Three implementation approaches (MDX Block, Pre-compiled Pages, Hybrid)

---

## Plugin Builder (`/interface`)

A client-side WordPress plugin and block prototyping tool built into Gutendocs. Use it to design portfolio project ideas — configure plugin metadata, add Gutenberg blocks, and generate copy-paste scaffolded code — entirely in the browser with no backend.

Access it via the **Plugin Builder** link at the bottom of the docs sidebar, or go directly to `/interface`.

### What it does

- **Project portfolio** — Create, edit, duplicate, and delete plugin project prototypes. Status: draft / active / archived.
- **Plugin metadata editor** — Set plugin name, slug, description, author, version, license, text domain, namespace, and tags. All validated against WordPress plugin header standards.
- **Block builder** — Add Gutenberg blocks to a plugin. For each block, configure:
  - General: name, title, description, category, icon
  - Attributes: name, type, default value, source (none / attribute / text / html / query / meta)
  - Supports: all `block.json` supports flags grouped by Behavior, Layout, Color, Typography, Spacing
  - Editor behavior: RichText, InnerBlocks, MediaUpload, InspectorControls, BlockControls, view.js
- **Code generator** — Live code output for every file in the plugin. Select a block to view its specific files.
- **Download** — Download all generated files individually (one browser download per file).

### Routes

| URL | Page |
|---|---|
| `/interface` | Portfolio — project grid |
| `/interface/new` | New project wizard (2 steps) |
| `/interface/:id` | Project hub — overview of one plugin |
| `/interface/:id/plugin` | Plugin metadata editor |
| `/interface/:id/blocks/new` | Add a new block |
| `/interface/:id/blocks/:blockId` | Edit an existing block |
| `/interface/:id/generate` | Code generator + file download |

### Generated files

For each plugin project the generator produces:

| File | Description |
|---|---|
| `my-plugin.php` | Plugin header comment, namespace declaration, `register_block_type()` calls |
| `package.json` | `@wordpress/scripts` devDependency with standard build/start/lint scripts |
| `src/block-name/block.json` | `apiVersion: 3`, `$schema`, name, attributes, supports |
| `src/block-name/edit.js` | Editor component with conditional imports based on editor behavior flags |
| `src/block-name/save.js` | Save component with `useBlockProps.save()` |
| `src/block-name/view.js` | Front-end vanilla JS (only when _Generate view.js_ is enabled) |

All generators are pure functions in `src/interface/generators/` — they take plain JS objects and return strings with no side effects.

### Data

All projects persist in `localStorage` under the key `gutendocs-projects` as a `JSON` array. No server, no account required.

```
localStorage key: gutendocs-projects → Array<Project>
```

Each project stores full plugin metadata and an array of block models. IDs are generated with `crypto.randomUUID()`.

### File structure

```
src/interface/
├── PLAN.md                    — Feature plan and future roadmap
├── InterfaceApp.jsx           — Sub-router for /interface/*
├── agents/                    — Agent configuration docs (6 roles)
├── components/
│   ├── blocks/                — Block editor components
│   ├── generator/             — Code output + download
│   ├── plugin/                — Plugin metadata form
│   ├── portfolio/             — Project cards and grid
│   └── shared/                — Breadcrumb, FieldGroup, ConfirmDialog, etc.
├── data/                      — Factory functions and constants
├── generators/                — Pure code generation functions
├── hooks/                     — useProjects, useProject, useBlock, useClipboard
├── layouts/
│   └── InterfaceLayout.jsx    — Sidebar + content layout (iface-* BEM)
├── pages/                     — Page-level route components
└── styles/
    └── interface.css          — All interface styles (iface-* BEM namespace)
```

### Agent configs

Six agent definition files in `src/interface/agents/` describe the responsibilities for each development role. They are displayed in a collapsible panel on the Generator page and can be copied as system prompts.

| File | Role |
|---|---|
| `optimization.agent.md` | Security, WPCS, Plugin Check Plugin (PCP) compliance, performance |
| `development.agent.md` | edit.js / save.js / view.js patterns, block API standards |
| `documentation.agent.md` | PHPDoc, JSDoc, README.txt (wordpress.org), changelog |
| `testing.agent.md` | PHPUnit, Jest, Playwright E2E, axe-core accessibility |
| `compatibility.agent.md` | WP/PHP/React version matrix, block apiVersion differences |
| `integration.agent.md` | Gravity Forms, WooCommerce, The Events Calendar, theme compatibility |

### Planned: zip bundle download

The current download sends each file as a separate browser download. A single `.zip` bundle is planned — see `src/interface/PLAN.md` for the implementation spec (requires `jszip`).

