<script lang="ts">
  import Terminal from "@component/Terminal/Terminal.svelte";
</script>

<div class="container">
  <div class="split">
    <Terminal />
  </div>
  <div class="split">
    <Terminal />
  </div>
</div>

<style lang="postcss">
  .container {
    display: flex;
    width: 100vw;
    max-width: 100vw;
  }
  .split {
    width: 50%;
  }
</style>
