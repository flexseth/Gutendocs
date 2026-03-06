# Changelog

All notable changes to this project will be documented in this file.

---

## [2.0.0] - 2026-03-06

### Added

#### Block Editor Components
- `BlockControls` — block toolbar slot simulation mirroring `@wordpress/block-editor`
  - Props: `group`, `children`, `className`
  - Renders a labelled toolbar preview showing group name; in real WP this is a slot/fill
  - Three interactive demos: alignment buttons, Bold/Italic/Underline toggles, style variant selector
  - Registered in `MDXProvider`, barrel export, route `/docs/block-controls`, sidebar nav, and `docs.css`
- `InspectorControls` — sidebar panel slot simulation mirroring `@wordpress/block-editor`
  - Registered in `MDXProvider`, barrel export, route `/docs/inspector-controls`, sidebar nav
- `RichText` — rich text editor field mirroring `@wordpress/block-editor`
  - Registered in `MDXProvider`, barrel export, route `/docs/rich-text`, sidebar nav
- `MediaUpload` — media library upload button mirroring `@wordpress/block-editor`
  - Registered in `MDXProvider`, barrel export, route `/docs/media-upload`, sidebar nav

#### Form Controls
- `BaseControl` — labeled wrapper for custom form fields mirroring `@wordpress/components`
  - Props: `label`, `help`, `id`, `className`, `children`
  - Registered in `MDXProvider`, barrel export, route `/docs/base-control`, sidebar nav
- `CheckboxControl` — labeled checkbox mirroring `@wordpress/components`
  - Props: `label`, `checked`, `onChange`, `help`, `indeterminate`, `disabled`, `className`, `id`
  - `indeterminate` state applied via DOM ref; sets `aria-checked="mixed"` automatically
  - Three interactive persistent demos: basic toggle, multiple checkboxes, help text variant
  - Registered in `MDXProvider`, barrel export, route `/docs/checkbox-control`, sidebar nav
- `ComboboxControl` — searchable autocomplete dropdown mirroring `@wordpress/components`
  - Props: `label`, `value`, `options`, `onChange`, `onFilterValueChange`, `help`, `isLoading`, `messages`, `className`
  - Full keyboard navigation; built-in clear button, "no results" and loading states
  - Three interactive persistent demos: countries list, font family picker, no-results state
  - Registered in `MDXProvider`, barrel export, route `/docs/combobox-control`, sidebar nav, and `docs.css`
- `CustomSelectControl` — custom-rendered select dropdown mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/custom-select-control`, sidebar nav
- `DateTimePicker` — date and time picker mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/date-time-picker`, sidebar nav
- `FormTokenField` — tag-style multi-value token input mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/form-token-field`, sidebar nav, and `docs.css`
- `NumberControl` — numeric input with increment/decrement mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/number-control`, sidebar nav
- `RadioControl` — radio button group mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/radio-control`, sidebar nav, and `docs.css`
- `SearchControl` — search input field mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/search-control`, sidebar nav
- `TextControl` — single-line text input mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/text-control`, sidebar nav
- `TextareaControl` — multi-line textarea mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/textarea-control`, sidebar nav, and `docs.css`
- `ToggleGroupControl` — segmented button group mirroring `@wordpress/components`
  - Exports: `ToggleGroupControl`, `ToggleGroupControlOption`, `ToggleGroupControlOptionIcon`
  - Registered in `MDXProvider`, barrel export, route `/docs/toggle-group-control`, sidebar nav
- `UnitControl` — numeric input with unit selector mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/unit-control`, sidebar nav, and `docs.css`

#### Layout & Composition
- `BoxControl` — four-sided spacing control (top/right/bottom/left) mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/box-control`, sidebar nav
- `Flex` — flexbox layout primitive mirroring `@wordpress/components`
  - Exports: `Flex`, `FlexItem`, `FlexBlock`
  - Registered in `MDXProvider`, barrel export, route `/docs/flex`, sidebar nav
- `Spacer` — whitespace utility component mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/spacer`, sidebar nav
- `ToolsPanel` — collapsible settings panel with reset support mirroring `@wordpress/components`
  - Exports: `ToolsPanel`, `ToolsPanelItem`
  - Registered in `MDXProvider`, barrel export, route `/docs/tools-panel`, sidebar nav

#### Overlays & Navigation
- `Dropdown` — composable dropdown with render-prop trigger and popover panel mirroring `@wordpress/components`
  - Props: `renderToggle`, `renderContent`, `popoverProps`, `className`, `contentClassName`, `defaultOpen`, `onToggle`, `onClose`
  - Closes on outside click and Escape key
  - Three interactive persistent demos: style menu, icon picker, color swatch picker
  - Registered in `MDXProvider`, barrel export, route `/docs/dropdown`, sidebar nav, and `docs.css`
- `DropdownMenu` — icon-triggered dropdown menu mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/dropdown-menu`, sidebar nav
- `Guide` — multi-step modal guide mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/guide`, sidebar nav
- `Modal` — accessible dialog overlay mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/modal`, sidebar nav, and `docs.css`
- `Popover` — anchored floating panel mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/popover`, sidebar nav
- `TabPanel` — tabbed content panel mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/tab-panel`, sidebar nav, and `docs.css`
- `Tabs` — accessible tabs primitive mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/tabs`, sidebar nav

#### Display & Utility
- `ButtonGroup` — grouped button row mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/button-group`, sidebar nav
- `CodeTabs` — tabbed multi-language code viewer
  - Registered in `MDXProvider`, barrel export; used inline in MDX files
- `ColorPicker` — free-form color picker mirroring `@wordpress/components`
  - Props: `color`, `onChange`, `enableAlpha`, `defaultValue`, `copyFormat`, `className`
  - Spectrum proxy via native `<input type="color">`; optional opacity slider
  - Three interactive persistent demos: basic, alpha channel, reset-to-default
  - Registered in `MDXProvider`, barrel export, route `/docs/color-picker`, sidebar nav, and `docs.css`
- `FocalPointPicker` — image focal point selector mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/focal-point-picker`, sidebar nav, and `docs.css`
- `FontSizePicker` — font size selector mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/font-size-picker`, sidebar nav, and `docs.css`
- `Notice` — dismissible status message mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/notice`, sidebar nav, and `docs.css`
- `PanelBody` — collapsible inspector panel mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/panel-body`, sidebar nav, and `docs.css`
- `Placeholder` — empty-state block placeholder mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/placeholder`, sidebar nav, and `docs.css`
- `Snackbar` — temporary toast notification mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/snackbar`, sidebar nav
- `Spinner` — loading indicator mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/spinner`, sidebar nav, and `docs.css`
- `Tooltip` — hover label for UI elements mirroring `@wordpress/components`
  - Registered in `MDXProvider`, barrel export, route `/docs/tooltip`, sidebar nav, and `docs.css`

---

## [1.8.1] - 2026-02-20

### Changed
- Renamed GitHub Copilot agent file from `my-agent.agent.md` to `MDX-Gutendocs-creator.md` to match the agent's `name` field

---

## [1.8.0] - 2026-02-19

### Added

- `ColorPalette` component — color swatch grid mirroring `@wordpress/components`
  - Props: `colors`, `value`, `onChange`, `disableCustomColors`, `clearable`, `className`
  - Clickable swatches with selected state ring, hover scale, and smooth transitions
  - Optional custom color `<input type="color">` for freeform selection
  - `clearable` button to reset selection back to `undefined`
  - Live selected color preview (swatch + code value) below the palette
- `color-palette.mdx` — three interactive persistent demos:
  - `BackgroundDemo` — pick a background color for a live preview box
  - `TextColorDemo` — restricted palette (`disableCustomColors`) drives live text color
  - `BorderDemo` — clearable palette controls a bordered box (`clearable`)
- All demos persist state via `useLocalStorage` (keys: `demo-colorpalette-background`, `demo-colorpalette-text`, `demo-colorpalette-border`)
- Registered in `MDXProvider`, barrel export, route `/docs/color-palette`, sidebar nav, and `docs.css`

---

## [1.7.2] - 2026-02-19

### Fixed
- Missing imports across components and doc pages

---

## [1.7.1] - 2026-02-19

### Fixed
- `RangeControl` slider touch targets for mobile accessibility — improved hit area and pointer handling to prevent accidental mis-taps on small screens

---

## [1.7.0] - 2026-02-19

### Added
- `DateTimePicker` component — date and time picker mirroring `@wordpress/components`
  - Props: `label`, `value`, `onChange`, `currentDate` (WordPress block attribute alias), `is12Hour`, `help`, `disabled`, `className`, `dateOnly`, `timeOnly`
  - Supports date-only, time-only, or combined date + time modes
  - ISO 8601 string interface for full WordPress block attribute compatibility
- `date-time-picker.mdx` — three interactive persistent demos:
  - `BasicDemo` — full date + time picker (key: `demo-datetime-basic`)
  - `DateOnlyDemo` — date-only mode (key: `demo-datetime-date-only`)
  - `TimeOnlyDemo` — time-only mode (key: `demo-datetime-time-only`)
- Registered in `MDXProvider`, barrel export, route `/docs/date-time-picker`, sidebar nav, and `docs.css`

---

## [1.6.0] - 2026-02-19

### Added
- `CodeBlock` — upgraded with full syntax highlighting via `prism-react-renderer` using the Night Owl theme
- `CodeTabs` component — tabbed multi-language code viewer
  - Props: `tabs` — array of `{ label, language, code }` objects
  - Renders a tab bar for switching between code snippets; active tab highlighted
- Both components registered globally in `MDXProvider`

---

## [1.5.0] - 2026-02-19

### Added
- `TextControl` component — single-line text input mirroring `@wordpress/components`
  - Props: `label`, `value`, `onChange`, `help`, `placeholder`, `type`, `disabled`, `className`, `autoComplete`
  - Controlled component; supports all standard HTML input types
- `text-control.mdx` — three interactive persistent demos:
  - `BasicDemo` — plain text input (key: `demo-text-basic`)
  - `EmailDemo` — email type input (key: `demo-text-email`)
  - `HeadingDemo` — dual inputs driving a live heading/subheading preview (keys: `demo-text-heading`, `demo-text-subheading`)
- Registered in `MDXProvider`, barrel export, route `/docs/text-control`, sidebar nav, and `docs.css`

---

## [1.4.0] - 2026-02-19

### Added

- `RangeControl` component — numeric slider mirroring `@wordpress/components`
  - Props: `label`, `value`, `onChange`, `min`, `max`, `step`, `help`, `disabled`, `withInputField`, `className`
  - Paired numeric input field, min/max labels, keyboard accessible, focus-visible ring
- `range-control.mdx` — three interactive persistent demos:
  - `FontSizeDemo` — drag to resize live sample text (12–48px)
  - `OpacityDemo` — control element transparency (0–1, step 0.1)
  - `ColumnsDemo` — live CSS grid redraws column count (1–6)
- All demos persist state via `useLocalStorage` (keys: `demo-range-font-size`, `demo-range-opacity`, `demo-range-columns`)
- Registered in `MDXProvider`, barrel export, route `/docs/range-control`, sidebar nav, and `docs.css`

---

## [1.1.0] - 2026-02-19

Project renamed to `Gutendocs` — a documentation system for WordPress projects using MDX.

### Notes
- Non-persistent: Component resets on page refresh

### Reworked
- `ToggleControl` and `SelectControl` use state management for demos

### Added

- `ToggleControl` component — boolean toggle switch mirroring `@wordpress/components`
  - Props: `label`, `checked`, `onChange`, `help`, `disabled`, `className`
  - Accessible: keyboard navigable, focus-visible ring, ARIA `describedby` for help text
- `SelectControl` component — dropdown select mirroring `@wordpress/components`
  - Props: `label`, `value`, `options`, `onChange`, `help`, `disabled`, `className`, `children` (optgroup)
  - Controlled via `options` array or raw `<optgroup>` children
- `toggle-control.mdx` — interactive demos with stateful `EnableFeatureDemo` and `ShowDateDemo` wrappers, WordPress `edit.js` examples, `block.json` snippets, and PropsTable
- `select-control.mdx` — interactive demos with stateful `AlignmentDemo` and `FontSizeDemo` wrappers, WordPress `edit.js` examples, `block.json` snippets, and PropsTable
- Both components registered globally in `MDXComponentsProvider` — no imports needed in `.mdx` files
- Sidebar nav and routes added for `/docs/toggle-control` and `/docs/select-control`
- BEM styles for both components added to `docs.css`
- PR [#2](https://github.com/flexseth/MDX/pull/2) — fix: SelectControl value saving and ToggleControl toggling in MDX docs (merged)

---

## [1.0.0] - 2026-02-19

### Added

- Initial release — MDX rendering confirmed working via Vercel deployment
- **[Live Demo](https://vercel.com/flexseths-projects/mdx-for-wordpress-documentation)** — MDX pages render React components inline with Markdown
- `@mdx-js/rollup` compiles `.mdx` files to React components at build time (no runtime overhead)
- `MDXProvider` via `@mdx-js/react` maps markdown elements and custom components globally across all docs
- `remark-gfm` plugin enables GitHub Flavored Markdown: tables, task lists, strikethrough
- Documentation pages rendering live with interactive components:
  - `getting-started.mdx` — intro with live component demos, GFM tables, JS expressions
  - `alert.mdx` — Alert variants (`info`, `warning`, `success`, `error`) with PropsTable
  - `button.mdx` — Button variants and sizes with PropsTable
  - `card.mdx` — Card nesting examples with PropsTable
- Reusable React components available globally in all `.mdx` files without imports:
  - `Alert` — callout component with four severity variants
  - `Button` — primary / secondary / outline with small / medium / large sizes
  - `Card` — bordered container with optional title header
  - `CodeBlock` — dark-themed code display with language label
  - `PropsTable` — renders prop definitions as a documentation table
- Sidebar navigation layout with responsive mobile collapse
- Vite + React dev server (`npm run dev`) and production build (`npm run build`)
- PR [#1](https://github.com/flexseth/MDX/pull/1) — fix: index page loading (merged)