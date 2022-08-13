<script>
  import { onMount } from 'svelte'
  import { browser, dev } from '$app/env'

  /**
  * @type {any}
  */
  let ReloadPrompt
  onMount(async () => {
    !dev && browser && (ReloadPrompt = (await import('$lib/components/ReloadPrompt.svelte')).default)
  })
</script>

<svelte:head>
  {#if (!dev && browser)}
    <link rel="manifest" href="/_app/manifest.webmanifest">
  {/if}
</svelte:head>

<main>
  <slot />
</main>

{#if ReloadPrompt}
  <svelte:component this={ReloadPrompt} />
{/if}