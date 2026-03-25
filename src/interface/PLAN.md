# Interface Feature — WordPress Plugin/Block Builder

This module lives at `src/interface/` and is part of the Gutendocs site. It provides a client-side WordPress plugin and block prototyping tool for building portfolio projects.

## Purpose

Create, configure, and generate scaffolded code for WordPress plugins (with and without Gutenberg blocks) — entirely in the browser, with no backend.

## Full Implementation Plan

See the approved plan at `/Users/seth/.claude/plans/gleaming-drifting-flame.md` for the complete architecture, data models, component breakdown, and implementation order.

## Quick Reference

### Routes
| URL | Page |
|---|---|
| `/interface` | Portfolio (project grid) |
| `/interface/new` | New project wizard |
| `/interface/:id` | Project hub |
| `/interface/:id/plugin` | Plugin metadata editor |
| `/interface/:id/blocks/:blockId` | Block editor |
| `/interface/:id/generate` | Code generator |

### localStorage Keys
| Key | Contents |
|---|---|
| `gutendocs-projects` | `Array<Project>` — all projects |

### CSS Namespace
All styles use the `iface-*` BEM prefix (`src/interface/styles/interface.css`).

### Generators
Pure functions in `src/interface/generators/` — take a project/block object, return a string. No React, no side effects.

### Agents
Six agent definition files in `src/interface/agents/` covering optimization, development, documentation, testing, compatibility, and integration roles.

---

## Zip Bundle Download

**Status:** Implemented — `new/download-files` branch.

**Goal:** Replace the current per-file download (`DownloadBundle.jsx`) with a single `.zip` download containing all generated files in the correct `create-block` folder structure.

**Implementation:**
1. Add `jszip` as a project dependency:
   ```bash
   npm install jszip
   ```
2. Update `src/interface/components/generator/DownloadBundle.jsx`:
   - Import `JSZip` dynamically: `const JSZip = (await import('jszip')).default`
   - Create a root folder named after `plugin.slug`
   - Call `generateAll(project)` and `zip.folder(slug).file(path, content)` for each entry
   - Generate blob with `zip.generateAsync({ type: 'blob' })` and trigger download
3. The zip structure should mirror `create-block` output:
   ```
   my-plugin/
   ├── my-plugin.php
   ├── package.json
   └── src/
       └── block-name/
           ├── block.json
           ├── edit.js
           ├── save.js
           └── view.js  (only when viewScript is enabled)
   ```

**Current workaround:** `DownloadBundle.jsx` downloads each file individually using `Blob` + `URL.createObjectURL` — no dependencies required.
