import { merge } from "theme-ui"
import originalTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index"

const theme = merge(originalTheme, {
  config: {
    initialColorModeName: `light`,
  },
  colors: {
    primary: `var(--color-accent)`,
    text: `var(--color-foreground)`,
    background: `var(--color-background)`,
    heading: `var(--color-foreground)`,
    divide: `var(--color-background-tinted)`,
    muted: `var(--color-background-tinted)`,
    toggleIcon: `var(--color-foreground)`,
    modes: {
      dark: {
        primary: `var(--color-accent)`,
        text: `var(--color-foreground)`,
        background: `var(--color-background)`,
        heading: `var(--color-foreground)`,
        divide: `var(--color-background-tinted)`,
        muted: `var(--color-background-tinted)`,
        toggleIcon: `var(--color-foreground)`,
      },
    },
  },
  fonts: {
    body: `-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, Ubuntu, roboto, noto, "segoe ui", arial, sans-serif`,
    heading: `-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, Ubuntu, roboto, noto, "segoe ui", arial, sans-serif`,
  },
})

export default theme
