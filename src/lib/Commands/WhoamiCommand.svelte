<script lang="ts">

  export let links = [
    {
      name: 'Github',
      url: 'https://github.com/salman2301'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/salman2301'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/asalman2301/'
    }
  ]
</script>

------------------
<h1>WHO AM I</h1>
------------------

<p>
  Hello there, welcome to my site! I am Salman, a full stack developer from India 🇮🇳. I have 4+ years experience in web development. I am passionate about web development and love to learn new things!
</p>

<p>I am currently working as a full stack developer at a startup.</p>


<p class="header-label">Social links:</p>
<ul>
  {#each links as link}
    <a
      href="{link.url}"
      target="_blank"
    >
     <li>
        {link.name}
      </li>
    </a>
  {/each}
</ul>

<style lang="postcss">
h1 {
  @apply text-2xl;
}
.header-label {
  @apply my-1 mt-2;
}

ul {
  @apply flex gap-2 flex-wrap;
}
li {
  width: 120px;
  @apply text-center rounded;
  @apply cursor-pointer;
  @apply mb-4;
}
li:hover {
  @apply text-red-400;
  @apply bg-dark-gray;
}
</style>