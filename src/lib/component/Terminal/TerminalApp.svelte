<script lang="ts">
  import { getContext, onMount } from "svelte";
  import { Components, newComponent } from "@store/components";
  import { CONTEXT_KEY } from "./constant";
  import { setTheme } from '@/lib/store/theme';

  import type { Writable } from "svelte/store";
  import type { TerminalContainerApp } from "@/lib/store/multiplexStore";
  
  export let terminalApp: TerminalContainerApp = undefined;
  export let sayHello: boolean = true;
  export const components: Writable<Components[]> = getContext(CONTEXT_KEY.$COMPONENTS);

  function handleFocus() {
    const lastComponent = $components[$components.length - 1];
    if(lastComponent.key === "input") {
      // @ts-expect-error this component has focus
      lastComponent.props.componentInstance?.focus?.();
    }
  }

  onMount(()=>{
    
    if(sayHello) {
      newComponent(components, "whoami");
      newComponent(components, "help");
    }

    newComponent(components, "input");
    const currTheme = localStorage.getItem("curr-theme");
    if( currTheme ) setTheme(currTheme);

  });

</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="terminal-app-container" on:click={handleFocus} data-terminal-id={terminalApp?.id}>
  <!-- <input value={terminalApp.id}> -->
  {#each $components as item}
    <svelte:component
      this={item.component}
      {...item.props }
      bind:componentInstance={item.props.componentInstance}
    />
  {/each}
</div>


<style lang="postcss">
  .terminal-app-container {
    bottom:0;
    right: 0;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    overflow: auto;
    @apply bg-bg1;
    @apply text-t2;
    @apply px-4;
  }
</style>