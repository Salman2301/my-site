<script lang="ts">
  import Store from "./Store.svelte";
  import TerminalApp from "./TerminalApp.svelte";
  import type { TerminalContainerApp } from "@/lib/store/multiplexStore";

  export let terminalApp: TerminalContainerApp = undefined;
  export let sayHello: boolean = true;
</script>

<Store>
  <TerminalApp {terminalApp} sayHello={sayHello}/>
</Store>
