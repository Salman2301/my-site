<script lang="ts">
  import { icons } from "../../icon/map";


  export let links = [
    {
      name: 'Github',
      url: 'https://github.com/salman2301',
      icon: 'github',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/salman2301',
      icon: 'twitter'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/asalman2301/',
      icon: 'linkedin'
    }
  ]
</script>

<div class="header">
  <div class="full-border-style"></div>
  <h1>ABOUT ME</h1>
  <div class="full-border-style"></div>
</div>

<p>
  Hello there, welcome to my site! I am <span class="text-hl1">Salman</span>, a full stack developer from India 🇮🇳. I have 4+ years experience in web development. I am passionate about web development and love to learn new things!
</p>
<br>
<p>I am currently working as a <span class="text-hl1">full stack developer</span> at a startup.</p>


<p class="header-label text-t1">Social links:</p>
<ul>
  {#each links as link}
    <a
      href="{link.url}"
      target="_blank"
      class="btn"
    >
      <div class="icon" style="scale:0.85">
        <svelte:component this={icons[link.icon]} />
      </div>
     <li>
        {link.name}
      </li>
    </a>
  {/each}
</ul>

<style lang="postcss">
  .header {
    @apply flex flex-col items-center justify-center;
    @apply mb-2;
  }
  .full-border-style {
    @apply border border-b border-dashed border-t1;
    @apply w-full;
  }
  h1 {
    @apply text-2xl text-hl1;
    @apply py-2 my-1;
  }
  .header-label {
    @apply my-1 mt-2;
    @apply font-light text-sm;
  }

  a {
    @apply flex items-center justify-center;
  }

  ul {
    @apply flex gap-2 flex-wrap;
  }
  .btn {
    @apply border border-t1;
    width: 120px;
    @apply text-center rounded;
    @apply cursor-pointer;
    @apply mb-4 px-4;
    @apply flex justify-start gap-2;
  }

  .btn:hover {
    @apply text-hl1;
    @apply bg-bg2;
  }
  li {
    @apply text-center text-xs;
    height: 30px;
    @apply flex items-center justify-center;
    @apply font-bold;
  }
</style>