<script lang="ts">
	import { browser, dev } from '$app/env';
	import Toast from '$lib/components/Toast.svelte';
	import ReloadPrompt from '$lib/components/ReloadPrompt.svelte';
</script>

<svelte:head>
	{#if !dev && browser}
		<link rel="manifest" href="./manifest.webmanifest" />
	{/if}
</svelte:head>

<Toast />
<slot />

{#if !dev && browser}
	<ReloadPrompt />
{/if}
