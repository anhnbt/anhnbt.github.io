import { merge } from "theme-ui"
import originalTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index"

const theme = merge(originalTheme, {
  colors: {
    primary: `#6366f1`, // Beautiful Indigo color for light mode
    modes: {
      dark: {
        primary: `#818cf8`, // Lighter Indigo for dark mode
      },
    },
  },
})

export default theme
