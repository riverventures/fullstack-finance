# Fullstack Finance

**Institutional-grade map of the Solana finance stack across asset types.**

This repository now ships with a custom single-page frontend (`index.html`) designed to present the project as a credible institutional briefing surface for asset managers, banks, and digital custody teams.

## Design Direction

The redesign intentionally adapts cues from established financial web patterns while remaining original:

- **BlackRock-inspired** card modules: dense but readable capability blocks with restrained hover lift.
- **Vanguard-inspired** utility sidebar behavior: sticky contributor panel and practical anchor flow.
- **JPMorgan-style** typographic hierarchy: high-contrast headings, measured spacing, and conservative palette.

## What’s Included

- Hero with trust framing + partner logo row.
- Capabilities grid with custom SVG iconography.
- Accessible accordion documentation snippets with Prism syntax highlighting.
- Sticky contributors sidebar with team bios and back-to-top affordance.
- Footer with live repository metrics from GitHub API, compliance note, social links, and contact stub.

## Run Locally

```bash
# open in any static server
python3 -m http.server 4173
# then visit http://localhost:4173
```

## Accessibility & UX Notes

- Semantic landmarks (`header`, `main`, `aside`, `footer`).
- Skip-link support and keyboard-navigable interactive elements.
- Color contrast and spacing tuned for WCAG 2.1 AA-oriented readability.
- Mobile-first layout with breakpoints targeting 320px, 768px, and 1024px+.

## License

MIT
