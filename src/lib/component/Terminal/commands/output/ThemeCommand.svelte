<script lang="ts">
  // import { getTheme, setTheme, themeStore, themes } from "./themeCommand";

  import { getContext, tick } from "svelte";
  import type { Components } from "@store/components";
  import type { Writable } from "svelte/store";
  import { setTheme, themeStore, themes } from "@/lib/store/theme";
  import { CONTEXT_KEY } from "../../constant";

  export const component: Writable<Components[]> = getContext(CONTEXT_KEY.$COMPONENTS);

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