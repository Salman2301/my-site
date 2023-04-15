// @ts-check - enable TS check for js file
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        'light-gray': '#A0A0A0',
        'dark-gray': '#2D2D2D',
        bg1: 'var(--bg1)',
        bg2: 'var(--bg2)',
        hl1: 'var(--hl1)',
        t1: 'var(--t1)',
        t2: 'var(--t2)',
      },
    },
  },
});
