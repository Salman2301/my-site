<script lang="ts">
  import { tick } from "svelte";
  import { historyCommands, setNewCommand } from "../store/set-command";

  export let componentInstance: HTMLDivElement;
  export let disabled: boolean = false;
  
  let contenteditable: any = String(!disabled);
  $: contenteditable = String(!disabled);


  let lastCommandPosition: number = undefined;
  const handleKeyDown = async e => {
    if(e.key === "Enter") {
      e.preventDefault();
      await setNewCommand(componentInstance.textContent as any);
      await tick();
      disabled = true;
    }
    else if(e.key === "ArrowUp") {
      setLastCommand("up")
    }
    else if(e.key === "ArrowDown") {
      setLastCommand("down")
    }
  }

  function setLastCommand(move:"up" | "down") {
    const lastCommand = getLastCommand(move);
    componentInstance.textContent = lastCommand;
  }

  function getLastCommand(move: "up" | "down") {
    const len = $historyCommands.length;
    if( lastCommandPosition === undefined ) lastCommandPosition = len;

    move === "up" ? lastCommandPosition-- : lastCommandPosition++;

    if(lastCommandPosition < 0) lastCommandPosition = 0;
    if(lastCommandPosition > len) lastCommandPosition = len - 1;

    return $historyCommands[lastCommandPosition];
  }

  export function focus() {
    componentInstance.focus();
  }
</script>

<div
  class="input"
  {contenteditable}
  on:keydown={handleKeyDown}
  bind:this={componentInstance}
  autofocus
></div>

<style lang="postcss">
  div {
    @apply flex gap-1;
  }
  div::before {
    content: "$";
    padding-right: 4px;
    margin-left: -16px;
  }

  div:after {
    content: "";
    width: 10px;
    @apply bg-bg2;
    
    margin-left: -4px;
    visibility: hidden;
  }

  .input:focus:after {
    visibility: visible;
    animation: blink-animation 2s steps(5, start) infinite;
  }


  .input {
    @apply text-t2;
    @apply bg-transparent;
    @apply w-full;
    caret-color: rgba(0,0,0,0);
  }

  .input:focus {
    @apply border-0 outline-none;
  }

  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
  @-webkit-keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }

</style>