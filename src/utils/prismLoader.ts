import Prism from "prismjs"
import type { PrismTheme } from "prism-react-renderer"

// Ensure Prism is defined globally before loading language definitions
if (typeof globalThis !== "undefined") {
  ;(globalThis as any).Prism = Prism
}
if (typeof window !== "undefined") {
  ;(window as any).Prism = Prism
}
if (typeof global !== "undefined") {
  ;(global as any).Prism = Prism
}

// Base languages
try {
  require("prismjs/components/prism-markup")
  require("prismjs/components/prism-css")
  require("prismjs/components/prism-clike")
  require("prismjs/components/prism-javascript")

  // Frontend languages
  require("prismjs/components/prism-jsx")
  require("prismjs/components/prism-typescript")
  require("prismjs/components/prism-tsx")

  // Backend & Data languages
  require("prismjs/components/prism-java")
  require("prismjs/components/prism-sql")
  require("prismjs/components/prism-json")
  require("prismjs/components/prism-yaml")
  require("prismjs/components/prism-properties")

  // DevOps & Tools
  require("prismjs/components/prism-bash")
  require("prismjs/components/prism-docker")
  require("prismjs/components/prism-nginx")
  require("prismjs/components/prism-graphql")
} catch (e) {
  // Safe fallback if components are already loaded or in browser context
}

export { Prism }

export const normalizeLanguage = (lang: string = ""): string => {
  const cleanLang = lang.toLowerCase().trim()
  const langMap: Record<string, string> = {
    js: "javascript",
    jsx: "jsx",
    react: "jsx",
    reactjs: "jsx",
    ts: "typescript",
    tsx: "tsx",
    reactts: "tsx",
    java: "java",
    py: "python",
    python: "python",
    sh: "bash",
    shell: "bash",
    zsh: "bash",
    bash: "bash",
    yml: "yaml",
    yaml: "yaml",
    json: "json",
    sql: "sql",
    properties: "properties",
    env: "properties",
    docker: "docker",
    dockerfile: "docker",
    nginx: "nginx",
    xml: "markup",
    html: "markup",
    svg: "markup",
    css: "css",
    graphql: "graphql",
  }

  return langMap[cleanLang] || cleanLang || "javascript"
}

// Rich, high-contrast Dark Theme (VS Code / One Dark inspired)
export const customDarkTheme: PrismTheme = {
  plain: {
    color: "#abb2bf",
    backgroundColor: "#1e1e2e",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#6c7086",
        fontStyle: "italic",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#cdd6f4",
      },
    },
    {
      types: ["property", "tag", "boolean", "number", "constant", "symbol", "deleted"],
      style: {
        color: "#fab387",
      },
    },
    {
      types: ["selector", "attr-name", "string", "char", "builtin", "inserted"],
      style: {
        color: "#a6e3a1",
      },
    },
    {
      types: ["operator", "entity", "url"],
      style: {
        color: "#89dceb",
      },
    },
    {
      types: ["atrule", "attr-value", "keyword"],
      style: {
        color: "#cba6f7",
        fontWeight: "bold",
      },
    },
    {
      types: ["function", "class-name", "maybe-class-name"],
      style: {
        color: "#89b4fa",
        fontWeight: "600",
      },
    },
    {
      types: ["annotation", "decorator"],
      style: {
        color: "#f9e2af",
        fontWeight: "600",
      },
    },
    {
      types: ["regex", "important", "variable"],
      style: {
        color: "#f38ba8",
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "#94e2d5",
        opacity: 0.9,
      },
    },
  ],
}

// Clean, high-contrast Light Theme (GitHub / One Light inspired)
export const customLightTheme: PrismTheme = {
  plain: {
    color: "#24292e",
    backgroundColor: "#f6f8fa",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#6a737d",
        fontStyle: "italic",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#24292e",
      },
    },
    {
      types: ["property", "tag", "boolean", "number", "constant", "symbol", "deleted"],
      style: {
        color: "#e36209",
      },
    },
    {
      types: ["selector", "attr-name", "string", "char", "builtin", "inserted"],
      style: {
        color: "#22863a",
      },
    },
    {
      types: ["operator", "entity", "url"],
      style: {
        color: "#005cc5",
      },
    },
    {
      types: ["atrule", "attr-value", "keyword"],
      style: {
        color: "#d73a49",
        fontWeight: "bold",
      },
    },
    {
      types: ["function", "class-name", "maybe-class-name"],
      style: {
        color: "#6f42c1",
        fontWeight: "600",
      },
    },
    {
      types: ["annotation", "decorator"],
      style: {
        color: "#b08800",
        fontWeight: "600",
      },
    },
    {
      types: ["regex", "important", "variable"],
      style: {
        color: "#e36209",
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "#005cc5",
      },
    },
  ],
}
