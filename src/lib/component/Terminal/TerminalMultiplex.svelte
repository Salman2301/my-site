<script lang="ts">
  import type { TerminalContainer, TerminalContainerLayout } from "@/lib/store/multiplexStore";
  import Terminal from "@component/Terminal/Terminal.svelte";
  
  export let terminalContainer: TerminalContainer[];
  export let mode: TerminalContainerLayout["mode"]= "vertical";

</script>

<div class="container" class:h={mode==="horizontal"}>
  {#each terminalContainer as terminal (terminal.id)}
    {#if terminal.type === "layout"}
      <div class="layout-container">  
        <svelte:self 
          terminalContainer={terminal.children}
          mode={terminal.mode}
        />
      </div>
    {:else if terminal.type === "app"}
      <div
        class="split"
        class:split-v={mode === "vertical"}
        class:split-h={mode === "horizontal"}
      >
        <Terminal />
      </div>
      
    {/if}
  {/each}
</div>

<style lang="postcss">
  .split {
    @apply border border-hl1;
    @apply m-1 p-1 rounded-md;
    max-width: 100%;
    max-height: 100%;
    @apply w-full h-full;
  }
  .split-h {
    width: 50%;
    max-width: 50%;
  }
  .split-v {
    height: 50%;
    max-height: 50%;
  }
  .container {
    @apply flex flex-wrap;
    @apply w-full h-full;
    max-width: 100%;
    max-height: 100%;
    @apply p-1;
  }
  .container.h {
    @apply flex-col;
  }
  .layout-container {
    @apply flex flex-wrap;
    @apply w-full h-full;
  }
</style>
