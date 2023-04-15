<script lang="ts">
  import { handleCommand, newCommandStore, setNewCommand } from "../store/set-command";
  import { setTheme, themes } from "./themeCommand";

  
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
    list-style-type:circle;
    @apply select-none cursor-pointer;
  }
  li:hover {
    @apply text-hl1;
  }
</style>