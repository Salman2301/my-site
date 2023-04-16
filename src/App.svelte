<script lang="ts">
  import { onMount } from "svelte";
  import { components, newComponent } from "./lib/store/components";
  import { setTheme } from "./lib/component/commands/output/ThemeCommand.svelte";
  
  function handleFocus() {
    const lastComponent = $components[$components.length - 1];
    if(lastComponent.key === "input") {
      // @ts-expect-error this component has focus
      lastComponent.props.componentInstance?.focus?.();
    }
  }

  onMount(()=>{
    newComponent("input");

    const currTheme = localStorage.getItem("curr-theme");
    if( currTheme ) setTheme(currTheme);

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
    position: absolute;
    width: 100%;
    max-width: 100%;
    height: 100%;
    overflow: scroll;
    @apply bg-bg1;
    @apply text-t2;
    @apply px-4;
  }
</style>