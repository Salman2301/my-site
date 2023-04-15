<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  
  export let time = new Date().toLocaleTimeString()

  let intervalId;
  onMount(()=>{
    intervalId = setInterval(()=>{
      time = new Date().toLocaleTimeString();
    }, 200)
  })

  onDestroy(()=>{
    clearInterval(intervalId)
  });
</script>

{time}

<style lang="postcss">

</style>