<script lang="ts">
  import { getContext, onMount } from "svelte";
  import { Components, newComponent } from "@store/components";
  // import { setTheme } from "@commands/output/ThemeCommand.svelte";
  import { CONTEXT_KEY } from "./constant";

  import type { Writable } from "svelte/store";
  

  export const components: Writable<Components[]> = getContext(CONTEXT_KEY.$COMPONENTS);

  function handleFocus() {
    const lastComponent = $components[$components.length - 1];
    if(lastComponent.key === "input") {
      // @ts-expect-error this component has focus
      lastComponent.props.componentInstance?.focus?.();
    }
  }

  onMount(()=>{
    newComponent(components, "input");

    const currTheme = localStorage.getItem("curr-theme");
    // if( currTheme ) setTheme(currTheme);

  });

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="container" on:click={handleFocus}>
  {#each $components as item}
    <svelte:component
      this={item.component}
      {...item.props}
      bind:componentInstance={item.props.componentInstance}
    />
  {/each}
</div>


<style lang="postcss">
  .container {
    /* position: absolute; */
    width: 100%;
    max-width: 100%;
    height: 100vh;
    overflow: scroll;
    @apply bg-bg1;
    @apply text-t2;
    @apply px-4;
  }
</style>