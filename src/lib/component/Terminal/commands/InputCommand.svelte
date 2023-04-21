<script lang="ts">
  import { getContext, tick } from "svelte";
  import { setNewCommand } from "@/lib/component/Terminal/store/command";
  import type { Writable } from "svelte/store";
  import type { Components } from "../store/components";
  import { CONTEXT_KEY } from "../constant";

  export let componentInstance: HTMLDivElement;
  export let disabled: boolean = false;
  const components: Writable<Components[]> = getContext(CONTEXT_KEY.$COMPONENTS);

  let contenteditable: any = String(!disabled);
  $: contenteditable = String(!disabled);
  
  export const historyCommands: Writable<any[]> = getContext(CONTEXT_KEY.$HISTORY);


  let lastCommandPosition: number = undefined;
  const handleKeyDown = async e => {
    if(e.key === "Enter") {
      e.preventDefault();
      await setNewCommand(components, historyCommands, componentInstance.textContent as any);
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
    let len = $historyCommands.length;
    if( lastCommandPosition === undefined ) {
      lastCommandPosition = len - 1;
      return $historyCommands[lastCommandPosition];
    }
    if( move === "up" && lastCommandPosition > 0) {
      lastCommandPosition--;
    }
    else if( move === "down" ){
      if(lastCommandPosition < len ) lastCommandPosition++;
      else return "";
    }

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
    @apply text-hl1;
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