# Gutendocs

A Vite + React + MDX documentation system for WordPress block and plugin development. Write component docs in Markdown with live interactive demos powered by React.

**[Live Demo →](https://gutendocs.vercel.app/)**

## Quick Start

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` — you'll see the sidebar navigation and live MDX-rendered documentation with interactive React components.

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
