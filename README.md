# havenleno22.github.io

The personal portfolio of Haven Leno J, a full-stack developer and B.Tech CSE student at
SRM Institute of Science and Technology, Chennai.

**Live:** https://havenleno22.github.io/

## What's on the site

- Experience: my MERN stack internship at GenLab, the Sensora 2.0 hackathon win, and LOGIC PLAY
- Projects, each with its own page: the problem, how it works, engineering details and what I'd improve next
- Hackathons, awards and certifications, with a certificate page and PDF for each one I hold a copy of
- Education, skills, a public GitHub summary and a downloadable resume

## Stack

React 19, Vite, React Router (hash routing, so every page works on GitHub Pages), Framer Motion
and lucide-react icons. Fonts are self-hosted. There is no backend.

## Run it locally

```bash
npm install
npm run dev
```

`npm run build` writes the site to `dist/`, and `npm run lint` runs oxlint.

## Deployment

Every push to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which
lints, builds and publishes `dist/` to GitHub Pages.

## Where things live

| What | Where |
| --- | --- |
| Experience and education | `src/data/experience.js` |
| Projects | `src/data/projects.js` |
| Awards and certificates | `src/data/credentials.js` |
| Images, logos, certificates, resume | `public/` |

## License

MIT for the code. The text, photos, certificates and resume are mine and are not covered by the license.
