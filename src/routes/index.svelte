<script lang="ts">
	import { useToast } from '$lib/hooks';
	import SvelteLogo from '$lib/assets/svelte.svg';

	const { showToast } = useToast();

	const pClickHandler = (event: MouseEvent): void => {
		const traget = event.target as HTMLElement;
		showToast(traget.innerText, 'info');
	};
</script>

<svelte:head>
	<title>Blueprint!</title>
</svelte:head>

<div class="preview-info">
	<div class="blueprint-bundle">
		<img src="/icon-512x512.png" alt="React Blueprint" width="256px" class="title-image" />
		<!-- @ts-ignore -->
		<SvelteLogo />
	</div>
	<h1>
		{`< `}Sveltkit Blueprint 2022{` />`}
	</h1>
	<p on:click={pClickHandler}>
		Dummy <SvelteLogo /><strong>Sveltkit App</strong> with initial settings
	</p>
</div>

<style>
	.blueprint-bundle {
		position: relative;
		width: fit-content;
		margin-bottom: 2rem;
	}
	:global(.preview-info svg) {
		vertical-align: middle;
		margin: 0 0.5rem;
		width: 20px;
	}
	:global(.blueprint-bundle > img + svg) {
		position: absolute;
		width: 50px;
		top: 50%;
		left: 50%;
		margin: 2.5rem 2rem;
	}
	.preview-info {
		display: flex;
		font-size: 1.2em;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		width: 100%;
		color: #fff;
		background-color: #269;
		background-image: linear-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
			linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
		background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
		background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
		text-shadow: 0 1px 0 #00000050;
	}

	img.title-image {
		height: auto;
		margin: 0 auto;
	}
</style>
