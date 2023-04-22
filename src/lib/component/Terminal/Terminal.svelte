<script lang="ts">
  import Store from "./Store.svelte";
  import TerminalApp from "./TerminalApp.svelte";
  import type { TerminalContainerApp } from "@/lib/store/multiplexStore";

  export let terminalApp: TerminalContainerApp = undefined;
</script>

<Store>
  <TerminalApp {terminalApp}/>
</Store>
