<script lang="ts" context="module">
  import { writable, type Writable } from 'svelte/store';
  export let debugStore: Writable<string> = writable('');
</script>

<script>
</script>

{#if $debugStore}
  <div>
    <pre>
      <code>
        {JSON.stringify(JSON.parse($debugStore), null, 2)}
      </code>
    </pre>
  </div>
{/if}

<style>
  div {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;
    background: var(--bg1);
    padding: 10px;
    border-radius: 10px;
    opacity: 0.8;
    border: 1px solid var(--t1);
    width: 300px; /* Increased width */
    font-size: 0.9em; /* Smaller font size */
    font-weight: bold; /* Bold text */
  }

</style>
