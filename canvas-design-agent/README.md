# Canvas Design Agent

A portable skill and reference system that transforms plain text into Canvas LMS-compatible HTML. Built for faculty with little or no HTML knowledge.

## What This Is

Canvas LMS strips most CSS (no `<style>` blocks, no external stylesheets, no JavaScript) and many HTML elements. Only inline `style=""` attributes and specific HTML elements survive the Rich Content Editor (RCE). This project provides:

1. **SKILL.md** -- An agent instruction file containing Canvas constraints, a numbered element library, and transformation rules. Works with any LLM.
2. **Reference Website** (in `docs/`) -- A visual catalog of every available element, step-by-step workflow instructions, and a methods guide for creating course-specific templates.

## Quick Start

### Workflow A: Local Agent (VS Code with Copilot, Cursor, etc.)

1. Place `SKILL.md` in your project's `.github/` directory (or configure your editor to reference it as a custom instruction file).
2. Write your course content in a plain text or markdown file.
3. Ask the agent to transform your content into Canvas HTML, optionally referencing element numbers from the catalog (e.g., "use L03 for a flexbox layout" or "make the schedule a D01 data table").
4. Copy the generated HTML into Canvas RCE (switch to HTML editor view) and save.

### Workflow B: Web-Based Agent (ChatGPT, Claude, Gemini, etc.)

1. Upload `SKILL.md` to the conversation (or paste its contents).
2. Upload or paste your plain text content.
3. Ask the agent to transform your content into Canvas HTML using the skill instructions.
4. Copy the generated HTML into Canvas RCE (switch to HTML editor view) and save.

## File Structure

```
canvas-design-agent/
  README.md            -- This file
  SKILL.md             -- Portable agent skill (the core instruction set)
  docs/
    index.html         -- Landing page: overview, workflows, methods guide
    elements.html      -- Visual element catalog with numbered previews
```

## Reference Website

Open `docs/index.html` in a browser to view the full reference site. It can also be hosted on GitHub Pages by configuring the repository to serve from the `docs/` folder.

The site includes:
- **Workflows** -- Step-by-step instructions for both local and web-based agent usage
- **Methods** -- How to create and maintain course-specific templates
- **Element Catalog** -- Visual preview of every Canvas-safe HTML element with its ID number

## Element Numbering System

Elements are organized by category with a letter prefix:

| Prefix | Category | Count |
|--------|----------|-------|
| L | Layout | 6 |
| C | Content Organization | 8 |
| T | Typography | 9 |
| D | Data Display | 7 |
| V | Visual Indicators | 6 |
| N | Navigation | 2 |
| X | Canvas Integration | 6 |

Faculty reference elements by number (e.g., "use C01 for collapsible sections"). The agent knows the corresponding HTML.

## Canvas Constraints (Summary)

**Works (inline style only):** flexbox, grid, gradients, relative/absolute positioning, overflow, max-width centering, details/summary, mark, abbr, definition lists, all table features, audio/video controls.

**Stripped:** `<style>` blocks, `<script>`, SVG, meter/progress, fieldset/legend, box-shadow, text-shadow, opacity, transform, letter-spacing, external CSS/JS, data URIs.

See SKILL.md for the complete constraint reference.
