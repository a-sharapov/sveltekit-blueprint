<script lang="ts">
  import { onMount } from 'svelte'
  import { browser, dev } from '$app/env'

  let ReloadPrompt: any
  onMount(async () => {
    !dev && browser && (ReloadPrompt = (await import('$lib/components/ReloadPrompt.svelte')).default)
  })
</script>

<svelte:head>
  {#if (!dev && browser)}
    <link rel="manifest" href="./manifest.webmanifest">
  {/if}
</svelte:head>

<slot />

{#if ReloadPrompt}
  <svelte:component this={ReloadPrompt} />
{/if}