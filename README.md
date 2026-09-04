# Web portfolio

Portfolio site for Bruno Andrade.

## Direction

- Dark-leaning, clean layout with orange accents
- Vertical left navigation rail
- Fast landing-page feel with clear section cards
- Simple content model that can grow over time

## References

### Figma

https://www.figma.com/design/1xNoyvA8ZFDBumteMeM7l6/Web?node-id=170-21&t=KMCXuf4yIaITyWox-1

### Templates

- https://maykonsousa.dev.br/experiences
- https://www.apple.com/br/iphone-16/
- https://pt.wix.com/website-template/view/html/2855
- https://pt.wix.com/website-template/view/html/1885

## Site structure

### Home

- Hero with name, role, and short positioning
- CTA buttons to projects and experience
- Cards that explain the site structure and visual direction

### Experiences

- Job timeline
- Technical experience stack
- Highlights and impact notes

### Projects

- Featured case studies
- Landing page experiments
- Smaller visual or interaction tests

### Personal

- Short bio
- Working style
- Contact details and social links

## Navbar

- Vertical rail on the left side
- Absolute positioning on desktop
- Stacked links with label and short description
- Keeps the current page active

## Content model

### USERS

### PROJECTS

### JOB_EXPERIENCES

| FIELD | ID | FROM | TO | NAME | ROLE | OVERVIEW_DESCRIPTION |
| --- | --- | --- | --- | --- | --- | --- |
| TYPE | UUID | DATETIME | DATETIME | VARCHAR(128) | VARCHAR(128) | VARCHAR(1000) |
| NULLABLE | FALSE | FALSE | FALSE | FALSE | FALSE | TRUE |

### TECH_EXPERIENCES

| FIELD | ID | NAME | KNOWLEDGE_LEVEL | EXPERIENCE_TIME |
| --- | --- | --- | --- | --- |
| TYPE | UUID | VARCHAR(128) | SMALLINT | SMALLINT |
| NULLABLE | FALSE | FALSE | FALSE | FALSE |
| DESCRIPTION |  |  | 0 TO 100 PERCENT | IN MONTHS |

## Feature toggles

`use-svg`: Use SVG instead of PNG

## Visual asset rules

- Prefer inline SVG components kept under `src/components/icons`.
- Reuse the shared `SvgIcon` wrapper so icons inherit theme color via `currentColor`.
- Experience cards should accept an optional `image` field; when absent, render a generated placeholder created as an SVG component instead of a broken or blank panel.
- Keep generated placeholder artwork in the icon layer rather than in `public/` so the theme system can style it consistently.
