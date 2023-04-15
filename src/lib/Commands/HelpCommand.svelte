<script lang="ts">
  import { components } from "../store/components";
  import { availableCommands, setNewCommand } from "../store/set-command";

  function handleClick(command: any) {
    const lastComponent = $components[$components.length - 1];
    if( lastComponent && lastComponent.props && lastComponent.props.componentInstance ) {
      //@ts-expect-error
      $components[$components.length - 1].props.componentInstance.textContent = command;
      setNewCommand(command);
    }
  }  

</script>


<p class="heading">Available commands :</p>

{#each Object.keys(availableCommands) as command}
  <li on:click={()=>handleClick(command)}>{command}</li>
{/each}

<p class="eof">----------------------------</p>

<style lang="postcss">
  .heading {
    @apply mt-1 mb-4;
    @apply text-minor-2;
  }
  li {
    @apply cursor-pointer;
    @apply text-minor-3;
  }
  li:hover {
    @apply text-minor-1;
  }
</style>