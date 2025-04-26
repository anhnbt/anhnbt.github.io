# GitHub Copilot Instructions

This file contains instructions and context for GitHub Copilot when working with this repository.

## Project Overview

This is a personal blog built with Gatsby. The blog contains technical articles primarily focused on JavaScript and web development topics.

## Repository Structure

- `/content/`: Contains all blog posts and pages in MDX format
  - `/content/posts/`: Individual blog posts
  - `/content/pages/`: Static pages like About
- `/src/`: Source code for the website
- `/static/`: Static assets like images and favicons
- `/public/`: Build output directory (automatically generated)

## Common Tasks

### Creating a New Blog Post

When creating a new blog post:
1. Create a new directory under `/content/posts/` with a slug-formatted name
2. Create an `index.mdx` file inside that directory
3. Include proper frontmatter with title, date, tags, etc.

### Styling Guidelines

- Follow consistent markup and styling for headings, code blocks, and other elements
- Use appropriate image formats and optimize images for web

## Development Workflow

- Use `npm run develop` for local development
- Pushes to the `main` branch automatically trigger deployment

## Notes

- The site uses the Gatsby minimal blog theme from @lekoarts
- Consider SEO optimization for all new content