<script lang="ts">
  import TerminalMultiplex from "./lib/component/Terminal/TerminalMultiplex.svelte";
  import { terminalContainer } from "./lib/store/multiplexStore";

</script>


<div class="container">
  <TerminalMultiplex {terminalContainer} />
</div>


<style lang="postcss">
  .container {
    display: flex;
    width: 100vw;
    max-width: 100vw;
    max-height: 100vh;
    height: 100vh;
  }
</style>
