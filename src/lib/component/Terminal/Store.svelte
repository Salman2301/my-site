<script lang="ts">
  import { Writable, writable } from "svelte/store";
  import { setContext } from "svelte";
  import { CONTEXT_KEY } from "./constant";

  import type { Components } from "./store/components";

  export const components: Writable<Components[]> = writable([]);
  export const newCommandStore: Writable<string> = writable('');

  export const historyCommands: Writable<string[]> = writable([]);

  setContext(CONTEXT_KEY.$COMPONENTS, components);
  setContext(CONTEXT_KEY.$COMMAND, newCommandStore);
  setContext(CONTEXT_KEY.$HISTORY, historyCommands);

</script>

<slot></slot>
