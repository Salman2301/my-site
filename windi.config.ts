// @ts-check - enable TS check for js file
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        "light-gray": "#A0A0A0",
        "dark-gray": "#2D2D2D",
        "major-1": "var(--major-1)",
        "major-2": "var(--major-2)",
        "minor-1": "var(--minor-1)",
        "minor-2": "var(--minor-2)",
        "minor-3": "var(--minor-3)",
      }
    }
  }
})