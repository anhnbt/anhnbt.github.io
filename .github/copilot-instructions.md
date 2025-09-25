# GitHub Copilot Instructions

This file contains instructions and context for GitHub Copilot when working with this Vietnamese technical blog repository.

## Project Overview

Personal Vietnamese blog built with Gatsby using @lekoarts/gatsby-theme-minimal-blog theme. Content focuses on JavaScript, web development, AI, and productivity topics written in Vietnamese with a personal, conversational tone.

## Architecture & Theme Structure

**Core Theme Pattern**: This project uses Gatsby theme shadowing to customize the @lekoarts minimal blog theme:

- Original theme files live in `node_modules/@lekoarts/gatsby-theme-minimal-blog/`
- Customizations go in `src/@lekoarts/gatsby-theme-minimal-blog/` (shadows the original)
- Current customizations: `texts/hero.mdx` and `texts/bottom.mdx` for homepage content

**Configuration**: `gatsby-config.ts` contains Vietnamese site metadata, navigation in Vietnamese ("Blog", "Giới thiệu"), and theme options.

## Content Structure & Patterns

### Blog Post Frontmatter (Required)

```yaml
---
title: 'Post Title in Vietnamese'
date: 2025-09-25
description: 'SEO description'
tags:
  - Javascript
  - AI
slug: '/url-slug-in-english'
---
```

### Content Conventions

- **Language**: Vietnamese content with English technical terms
- **Tone**: Personal/conversational ("mình", "các bạn") not formal
- **Structure**: Use clear headings, code blocks, and practical examples
- **Tags**: Common tags include `Javascript`, `AI`, `Writing`, `Productivity`, `Git`, `CSS`

### Directory Pattern

Each post gets its own directory: `/content/posts/post-slug-name/index.mdx`
Images go in the same directory as the post.

## Development Commands

```bash
npm run develop    # Local dev server (NOT npm start)
npm run build     # Production build
npm run clean     # Clear Gatsby cache
```

**Important**: Use `npm run develop` not `npm start` for development.

## Theme Customization Patterns

To customize theme components:

1. Check original in `node_modules/@lekoarts/gatsby-theme-minimal-blog/src/`
2. Create same path structure in `src/@lekoarts/gatsby-theme-minimal-blog/`
3. Copy and modify the component

Example: To customize homepage hero text, edit `src/@lekoarts/gatsby-theme-minimal-blog/texts/hero.mdx`

## Content Creation Guidelines

- **New posts**: Create directory with kebab-case name matching slug
- **Vietnamese style**: Use personal pronouns ("mình"), conversational explanations
- **Code examples**: Include practical, runnable code snippets
- **SEO**: Slug in English, content in Vietnamese, good descriptions
- **Images**: Place in post directory, optimize for web

## Site Identity

Site title: "Coding With WanBi", Author: Nguyễn Bá Tuấn Anh, focuses on sharing programming knowledge to Vietnamese developer community.
