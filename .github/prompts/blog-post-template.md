# Blog Post Template

Use this prompt to help generate a new blog post structure.

## Input Parameters
- title: The title of the blog post
- description: A brief summary of the post content
- tags: Comma-separated list of relevant tags
- language: The primary language for code examples (default: javascript)

## Template

```mdx
---
title: {{title}}
date: {{current_date}}
description: {{description}}
tags:
{{#each tags}}
  - {{this}}
{{/each}}
banner: ./banner.jpg
---

## Introduction

Introduction paragraph goes here. Explain what the article will cover and why it's important.

## Main Content Section

Main content goes here with appropriate headings, code examples, and explanations.

```jsx
// Example code block
function exampleFunction() {
  // Your code here
}
```

## Summary

Summarize the key points covered in the article.

## Additional Resources

- [Resource 1](https://example.com)
- [Resource 2](https://example.com)
```