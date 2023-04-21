import path from "path";
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@": path.resolve(__dirname, './src'),
      "@component": path.resolve(__dirname, './src/lib/component'),
      "@command": path.resolve(__dirname, './src/lib/component/Terminal/commands'),
      "@store": path.resolve(__dirname, './src/lib/component/Terminal/store')
    }
  },

  plugins: [
    svelte(),
    WindiCSS({
      scan: {
        dirs: ['src'],
        fileExtensions: ['svelte', 'ts'],
      },
    })
  ],
});
