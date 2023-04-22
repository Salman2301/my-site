<script lang="ts">
  import TerminalMultiplex from "./lib/component/Terminal/TerminalMultiplex.svelte";
  import { terminalMultiplexStore } from "./lib/store/multiplexStore";

</script>

<div class="container">
  <TerminalMultiplex terminalContainer={$terminalMultiplexStore} />
</div>


<style lang="postcss">
  .container {
    display: flex;
    width: calc(100vw - 12px);
    max-width: calc(100vw - 12px);
    max-height: calc(100vh - 12px);
    height: calc(100vh - 12px);
    @apply m-1;
  }
</style>
