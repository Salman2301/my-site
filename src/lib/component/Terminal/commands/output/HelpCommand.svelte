<script lang="ts">
  // import { components } from "@store/components";
  import { availableCommands, setNewCommand } from "@/lib/component/Terminal/store/command";
  import { getContext } from "svelte";
  import { CONTEXT_KEY } from "../../constant";
  import type { Writable } from "svelte/store";
  import type { Components } from "../../store/components";

  const components: Writable<Components[]> = getContext(CONTEXT_KEY.$COMPONENTS);

  const historyCommands: Writable<any[]> = getContext(CONTEXT_KEY.$HISTORY);


  function handleClick(command: any) {
    const lastComponent = $components[$components.length - 1];
    if( lastComponent && lastComponent.props && lastComponent.props.componentInstance ) {
      //@ts-expect-error
      $components[$components.length - 1].props.componentInstance.textContent = command;
      setNewCommand(components,historyCommands, command);
    }
  }  

</script>


<p class="heading">Available commands :</p>

{#each Object.keys(availableCommands) as command}
  <li on:click={()=>handleClick(command)}>{command}</li>
{/each}

<style lang="postcss">
  .heading {
    @apply mt-1 mb-2;
    @apply text-t1;
  }
  li {
    @apply cursor-pointer;
    @apply text-t2;
  }
  li:hover {
    @apply text-hl1;
  }
</style>