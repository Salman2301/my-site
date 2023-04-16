<script lang="ts" context="module">
  import { tick } from "svelte";
  import { newComponent } from "@store/components";
  import { Writable, writable } from "svelte/store";

  export const themeStore: Writable<THEME_NAME> = writable(getTheme() as THEME_NAME);
  
    /** ["--bg1", "--bg2", "--hl1", "--t1", "--t2"]
   * Theme set five colors in this order
   * 1. background 1
   * 2. background 2
   * 3. hight light 1
   * 4. text 1
   * 5. text 2
   */
  export let themes = {
    "atom-light": ["#fafafa", "#fff", "#e06c75", "#abb2bf", "#98c379"],
    "atom-dark": ["#1b1f23", "#282c34", "#e06c75", "#abb2bf", "#98c379"],
    "default-light": ["#FFF", "#A0A0A0", "#EF4444", "#696969", "#000"],
    "default-dark": ["#000", "#696969", "#EF4444", "#A0A0A0", "#FFF"],
    "dracula-light": ["#f8f8f2", "#44475a", "#ff5555", "#000", "#282a36"],
    "dracula-dark": ["#282a36", "#44475a", "#ff5555", "#000", "#f8f8f2"],
    "gruvbox-light": ["#fbf1c7", "#ebdbb2", "#fb4934", "#3c3836", "#282828"],
    "gruvbox-dark": ["#282828", "#3c3836", "#fb4934", "#ebdbb2", "#fbf1c7"],
    "material-light": ["#fafafa", "#fff", "#ff4081", "#cfd8dc", "#212121"],
    "material-dark": ["#212121", "#303030", "#ff4081", "#cfd8dc", "#ffffff"],
    "monoakai-light": ["#f8f8f2", "#f8f8f2", "#f92672", "#49483e", "#272822"],
    "monokai-dark": ["#272822", "#49483e", "#f92672", "#f8f8f2", "#f8f8f2"],
    "solarized-light": ["#fdf6e3", "#eee8d5", "#b58900", "#657b83", "#002b36"],
    "solarized-dark": ["#002b36", "#073642", "#586e75", "#839496", "#eee8d5"],
  } as const


  type THEME_NAME = keyof typeof themes;

  export function getTheme() {
    const command = localStorage.getItem("curr-theme");
    if (!command) return;
    const [_, name] = command.split(" ");
    return name;
  }

  export async function setTheme(command: string) {
    if(!command) return;
    const [_, name] = command.split(" ");
    if (name === undefined) {
      newComponent("theme");
    }
    else  if (name in themes) {
      const [bg1, bg2, hl1, t1, t2] = themes[name];
      document.documentElement.style.setProperty("--bg1", bg1);
      document.documentElement.style.setProperty("--bg2", bg2);
      document.documentElement.style.setProperty("--hl1", hl1);
      document.documentElement.style.setProperty("--t1", t1);
      document.documentElement.style.setProperty("--t2", t2);

      await tick();

      themeStore.set(name as THEME_NAME);
      localStorage.setItem("curr-theme", command)
    }
    else {
      newComponent("error", { message: `Theme ${name} not found`})
    }
  }
</script>

<script lang="ts">
  // import { getTheme, setTheme, themeStore, themes } from "./themeCommand";

  
  function handleClick(themeName: string) {
    setTheme(`theme ${themeName}`);
  }
</script>

<p>List of theme available:</p>

<ul>
  {#each Object.keys(themes) as themeName}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <li
      on:click={()=>handleClick(themeName)}
      class:active={$themeStore === themeName}
    >
      {themeName}
    </li>
  {/each}
</ul>

<style lang="postcss">
  p {
    @apply text-t1;
  }
  li {
    @apply ml-4;
    list-style-type:disc;
    @apply select-none cursor-pointer;
  }
  li:hover {
    @apply text-hl1;
    filter: brightness(75%);
  }
  li.active {
    @apply text-hl1;
    filter: brightness(100%);
  }
</style>