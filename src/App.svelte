<script lang="ts">
  import { onMount } from "svelte";
  import { components, newComponent } from "./lib/store/components";
  
  function handleFocus() {
    const lastComponent = $components[$components.length - 1];
    if(lastComponent.key === "input") {
      // @ts-expect-error this component has focus
      lastComponent.props.componentInstance?.focus?.();
    }
  }

  onMount(()=>{
    newComponent("input");
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
    @apply bg-major-1;
    @apply text-minor-3;
    overflow: scroll;
    @apply pl-4;
  }
</style>