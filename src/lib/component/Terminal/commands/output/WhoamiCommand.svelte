<script lang="ts">
  import { icons } from "@component/icon/map";

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

<div class="body-content">
  <div class="symbol">
    <span>
      <p>███████╗</p>
      <p>██╔════╝</p>
      <p>███████╗</p>
      <p>╚════██║</p>
      <p>███████║</p>
      <p>╚══════╝</p>
    </span>
    <span>
      <!-- a pathetic attempt not to let svelte trim the white space -->
      <p>{""} █████╗ </p>
      <p>██╔══██╗</p>
      <p>███████║</p>
      <p>██╔══██║</p>
      <p>██║  ██║</p>
      <p>╚═╝  ╚═╝</p>
    </span>
    <span>
      <p>██╗     </p>
      <p>██║     </p>
      <p>██║     </p>
      <p>██║     </p>
      <p>███████╗</p>
      <p>╚══════╝</p>
    </span>
    <span>
      <p>███╗   ███╗</p>
      <p>████╗ ████║</p>
      <p>██╔████╔██║</p>
      <p>██║╚██╔╝██║</p>
      <p>██║ ╚═╝ ██║</p>
      <p>╚═╝     ╚═╝</p>
    </span>
    <span>
      <p>{""} █████╗ </p>
      <p>██╔══██╗</p>
      <p>███████║</p>
      <p>██╔══██║</p>
      <p>██║  ██║</p>
      <p>╚═╝  ╚═╝</p>
    </span>
    <span>
      <p>███╗   ██╗</p>
      <p>████╗  ██║</p>
      <p>██╔██╗ ██║</p>
      <p>██║╚██╗██║</p>
      <p>██║ ╚████║</p>
      <p>╚═╝  ╚═══╝</p>
    </span>


  </div>
  <p>
    Hello there, welcome to my site! I am <span class="high-light">SALMAN</span>, a full stack developer from India 🇮🇳. I have 4+ years experience in web development. I am passionate about web development and love to learn new things!
  </p>
  <br>
  <p>I am currently working as a <span class="high-light">full stack developer</span> at a startup.</p>

</div>

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

  .high-light {
    @apply text-hl1 uppercase;
  }

  .symbol {
    font-family: monospace;
    @apply flex justify-center gap-1;
  }
  .body-content {
    width: 100%;
  }
  span {
    font-family: monospace;
  }

  .symbol span {
    @apply text-t1;
    animation: TextColor 1.2s ease infinite;
  }

  span p {
    white-space: pre;
    line-height: 12px;
  }

  .symbol span:nth-child(1) {
    animation-delay: 0.1s;
  }
  .symbol span:nth-child(2) {
    animation-delay: 0.2s;
  }
  .symbol span:nth-child(3) {
    animation-delay: 0.3s;
  }
  .symbol span:nth-child(4) {
    animation-delay: 0.4s;
  }
  .symbol span:nth-child(5) {
    animation-delay: 0.5s;
  }
  .symbol span:nth-child(6) {
    animation-delay: 0.6s;
  }
  .symbol span:nth-child(7) {
    animation-delay: 0.7s;
  }
  .symbol span:nth-child(8) {
    animation-delay: 0.8s;
  }
  .symbol span:nth-child(9) {
    animation-delay: 0.9s;
  }
  .symbol span:nth-child(10) {
    animation-delay: 1s;
  }

  @keyframes TextColor { 
    0% {
      transform: scale(1.05);
      margin-top: 0px;
      margin-bottom: 10px;
    }
    60% {
      color: var(--hl1);
    }
    85% {
      color: var(--hl1);
    }
    100% {
      transform: scale(1);
      margin-top: 10px;
      margin-bottom: 0px;
      color: var(--t2);
    }
  }
</style>