# GEMINI.md

## Project Overview

This is a personal blog and portfolio website built with [Next.js](https://nextjs.org/) and deployed as a static site on GitHub Pages. The content for the blog posts and projects is written in Markdown and processed using `gray-matter` and a series of `remark` and `rehype` plugins. The styling is done using [Tailwind CSS](https://tailwindcss.com/), and the site supports both light and dark themes.

## Building and Running

### Running the development server

To run the development server, use the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building the project

To build the project for production, use the following command:

```bash
npm run build
```

This will create an optimized production build of the site in the `.next` directory.

### Exporting the project

To export the project as a static site, use the following command:

```bash
npm run export
```

This will create a `out` directory with the static files that can be deployed to a web server.

## Development Conventions

### Linting

The project uses [ESLint](https://eslint.org/) for linting. To run the linter, use the following command:

```bash
npm run lint
```

### Content Creation

Blog posts and project descriptions are written in Markdown and stored in the `_posts` and `_projects` directories, respectively. Each file should have a YAML frontmatter section with the following fields:

**For blog posts:**

*   `title`: The title of the post
*   `date`: The date the post was published (e.g., `2021-10-20`)
*   `description`: A brief description of the post
*   `image`: The path to the header image for the post

**For projects:**

*   `title`: The title of the project
*   `date`: The date the project was last updated (e.g., `2021-10-20`)
*   `description`: A brief description of the project
*   `image`: The path to the header image for the project
