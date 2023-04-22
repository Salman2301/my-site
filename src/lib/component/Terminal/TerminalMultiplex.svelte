<script lang="ts">
  import Terminal from "@component/Terminal/Terminal.svelte";
  import type { TerminalContainer, TerminalContainerLayout } from "@/lib/store/multiplexStore";
  
  export let terminalContainer: TerminalContainer[];
  export let mode: TerminalContainerLayout["mode"] = undefined;

</script>

<div
  class="container"
  class:h={mode==="horizontal"}
  class:v={mode==="vertical"}
>
  {#each terminalContainer as terminal (terminal.id)}
    {#if terminal.type === "layout"}
      <div class="layout-container">  
        <svelte:self 
          terminalContainer={terminal.children}
          mode={terminal.mode}
        />
      </div>
    {:else if terminal.type === "app"}
      <div class="app">
        <Terminal terminalApp={terminal}/>
      </div>
    {/if}
  {/each}
</div>

<style lang="postcss">
  .app {
    @apply border border-hl1;
    @apply rounded-md;
    @apply w-full h-full;
    max-width: 100%;
    max-height: 100%;
    padding: 4px;
  }
  .container {
    @apply flex flex-wrap;
    @apply w-full h-full;
    max-width: 100%;
    max-height: 100%;
    gap: 4px;
  }
  .container.h {
    height: 50%;
    max-height: 50%;
  }
  .container.v {
    @apply flex-col;
    width: 50%;
    max-width: 50%;
  }
  .layout-container {
    @apply flex flex-wrap;
    @apply w-full h-full;
  }
</style>
