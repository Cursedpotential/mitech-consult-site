# Matthew Salem — Projects, Systems & Field Notes

An Astro 5 project archive documenting hands-on work across IT, networking, structured cabling, commercial AV, low-voltage systems, electrical infrastructure, software, and current experiments.

The site is designed as a photography-led body of work that also provides a concise professional background. It is not a consulting sales funnel or an AI product showcase.

## Local development

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Project structure

```text
src/
  assets/images/          Source-managed project photography
  components/             Layout, archive, gallery, and shared components
  content/projects/       Structured project entries
  layouts/                Shared document layout
  pages/                  Homepage, Work, Journey, Lab, Background, redirects
  styles/                 Global tokens and site styles
```

Project content is defined by `src/content.config.ts`. The Work index and individual project routes are generated from the entries in `src/content/projects/`.

## Add a project

1. Create a Markdown file in `src/content/projects/`.
2. Add the known metadata described by the collection schema.
3. Put project images in a stable, project-aware folder under `src/assets/`.
4. Reference images from the project's frontmatter.
5. Write the project narrative below the frontmatter.
6. Run `npm run build` to validate the entry and generate its page.

Incomplete historical metadata is expected. Omit unknown public fields and keep development-only research notes in the source using `TODO-CONTENT:`, `TODO-DATE:`, `TODO-LOCATION:`, or `TODO-CAPTION:`. Do not invent missing facts.

## Image workflow

The preferred archival workflow is: select original photographs, export them without destructive edits, organize them by project, then reference them through Astro's image pipeline. Use descriptive alt text and editorial captions. Photographs remain in natural color.

Existing `Commerce_*.jpg` files are retained in their original repository locations and currently form the first complete photo story.

## Legacy routes

- `/projects` redirects to `/work`
- `/about` redirects to `/journey`
- `/cv` redirects to `/background`
