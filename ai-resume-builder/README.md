# AI Resume Builder (Capstone Project)

A frontend-only web app (HTML5, CSS3, JavaScript). No Flask, no backend, no installs.

## Run it
Double-click `index.html`, or from this folder run `python -m http.server 8000` and open http://localhost:8000.
(Google Fonts load online; offline, the app falls back to system fonts.)

## Features
- Guided form: contact, target role, summary, skills, education, projects, experience, certifications
- **5 resume templates** (Classic, Modern, Bold, Minimal, Creative) with live thumbnails and **5 accent colours**
- Prompt-template summary drafting that only uses the facts you enter (see "See the prompt behind the draft")
- Role-based skill suggestions, bullet polishing, required-field validation
- Editable A4 preview, then **Print / Save as PDF** through the browser
- **Job match:** paste a job posting to see which of its skills you already list and which are missing (suggestions only, nothing is added for you)
- **Word export:** download a .docx (built-in generator, no libraries or internet needed)
- **Fit to one page:** shrinks the resume to a single A4 page (down to 60%)
- **Optional profile photo:** off by default, cropped square, kept in memory only
- Light/dark site theme, responsive layout, no data uploaded or stored

## Folder structure
```
index.html        page structure
css/style.css     site styling + resume templates
js/app.js         form logic, prompt templates, renderer, print
assets/           SVG illustrations (hero, steps, favicon)
```

## Mapping to the report modules
| Report module | Where |
|---|---|
| User Interface | `index.html`, `css/style.css` |
| Resume Information | form + `read()` in `app.js` |
| Prompt Processing | `ROLES`, `promptText()`, `draft()`, `polish()` |
| Resume Preview | `render()`, `paint()`, `fit()` |
| Print and PDF | `printResume()`, `@media print` |
| Validation | `validate()` |

## Customising
- Add a template: add an entry to `TPL` in `app.js` and a `.t-yourname` block in `style.css`.
- Add roles: extend `ROLES` in `app.js`.
- Swap images: replace files in `assets/` (keep the same names).
- Optional AI API: replace `draft()` with a call to your provider, and document it in the report only if you add it.

Tip for printing: in the print dialog choose A4, Margins: None, and turn on "Background graphics".
