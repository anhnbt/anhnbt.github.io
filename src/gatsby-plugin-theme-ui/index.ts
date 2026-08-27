import { merge } from "theme-ui"
import originalTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index"

const theme = merge(originalTheme, {
  config: {
    initialColorModeName: `light`,
  },
  colors: {
    primary: `var(--color-accent)`,
    text: `var(--color-foreground)`,
    secondary: `var(--color-foreground-muted)`,
    background: `var(--color-background)`,
    heading: `var(--color-foreground)`,
    divide: `var(--color-background-tinted)`,
    muted: `var(--color-background-tinted)`,
    toggleIcon: `var(--color-foreground)`,
    modes: {
      dark: {
        primary: `var(--color-accent)`,
        text: `var(--color-foreground)`,
        secondary: `var(--color-foreground-muted)`,
        background: `var(--color-background)`,
        heading: `var(--color-foreground)`,
        divide: `var(--color-background-tinted)`,
        muted: `var(--color-background-tinted)`,
        toggleIcon: `var(--color-foreground)`,
      },
    },
  },
  fonts: {
    body: `'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
    heading: `'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.7,
    heading: 1.2,
  },
})

export default theme
