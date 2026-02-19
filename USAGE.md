# MDX Working Example — Usage & WordPress Porting Guide

## Running the Project

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to view the documentation site.

## Project Overview

This project demonstrates MDX (Markdown + JSX) for React component documentation. It uses:

- **Vite** — fast dev server and bundler
- **@mdx-js/rollup** — compiles `.mdx` files into React components at build time
- **@mdx-js/react** — `MDXProvider` for injecting component mappings
- **remark-gfm** — GitHub Flavored Markdown support (tables, task lists, strikethrough)
- **react-router-dom** — page-based navigation

## How MDX Works Here

1. `.mdx` files are written with standard Markdown plus JSX
2. Vite's MDX plugin compiles each `.mdx` file into a React component
3. The `MDXProvider` maps standard Markdown elements (headings, code, tables) to custom React components
4. Custom components (Alert, Button, Card, etc.) are available in MDX without imports

## File Structure

| File | Purpose |
| --- | --- |
| `src/components/*.jsx` | Reusable React components |
| `src/providers/MDXComponents.jsx` | Component mapping for MDXProvider |
| `src/layouts/DocLayout.jsx` | Sidebar + content layout |
| `src/docs/*.mdx` | Documentation pages written in MDX |
| `src/styles/docs.css` | All styles for docs and components |

---

## WordPress Porting Strategy

### Concept Mapping

| MDX Pattern | WordPress Equivalent |
| --- | --- |
| `MDXProvider` components | Block context or global component registry |
| Custom React components | `@wordpress/components` or custom blocks |
| `.mdx` file compilation | Server-side `@mdx-js/mdx` via Node.js or REST API |
| DocLayout sidebar | WordPress template with navigation block |
| react-router-dom | WordPress template routing |

### Approach 1: MDX Block (Recommended)

Create a custom WordPress block that:

1. Accepts MDX content in a code editor (using `CodeEditor` or `PlainText`)
2. Sends the MDX to a server-side compiler (Node.js microservice or REST endpoint)
3. Receives compiled JSX output
4. Renders the output in the block editor preview and front-end

**Server-side compilation:**

```js
import { compile } from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';

async function compileMDX( source ) {
    const compiled = await compile( source, {
        remarkPlugins: [ remarkGfm ],
        outputFormat: 'function-body',
    });
    return String( compiled );
}
```

**Block registration (simplified):**

```js
registerBlockType( 'my-plugin/mdx-content', {
    edit: ( { attributes, setAttributes } ) => {
        // CodeEditor for MDX input
        // Live preview panel showing compiled output
    },
    save: () => {
        // Server-rendered HTML stored as block content
        return <InnerBlocks.Content />;
    },
});
```

### Approach 2: Pre-compiled MDX Pages

1. Write `.mdx` files in the theme or plugin
2. Compile them at build time using `@mdx-js/mdx`
3. Output static React components
4. Register each as a WordPress block or template part

This is best for static documentation that doesn't change frequently.

### Approach 3: Hybrid (Dynamic Content Block)

1. Store MDX source in post meta or a custom post type
2. Compile on save via a WordPress REST API endpoint (backed by Node.js)
3. Cache the compiled output
4. Render the cached output on the front-end

### Component Mapping for WordPress

Map the example components to WordPress equivalents:

```js
// WordPress component versions
import { Notice } from '@wordpress/components';       // Alert → Notice
import { Button } from '@wordpress/components';        // Button → Button
import { Card, CardHeader, CardBody } from '@wordpress/components'; // Card → Card
```

The `MDXProvider` pattern translates directly — instead of providing custom components in React context, you provide WordPress block components in the block editor context.

### Key Considerations

- **Security**: MDX compiles to executable code. Always sanitize input and compile server-side in a sandboxed environment.
- **Performance**: Cache compiled MDX output. Don't recompile on every page load.
- **Block Editor**: The block editor already uses React, so MDX-compiled components render natively.
- **Gutenberg Compatibility**: Custom components should follow the `@wordpress/components` API patterns for consistency.
