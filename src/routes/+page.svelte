<script lang="ts">
	import Images from '../lib/components/Images.svelte';
	import Navbar from '../lib/components/Navbar.svelte';
	import Shows from '../lib/components/Shows.svelte';
</script>

<svelte:head>
	<title>เบคอน | Home</title>
</svelte:head>

<main class="flex flex-col items-center w-full min-h-screen">
	<Images />

	<div class="lg:max-w-5xl max-w-2xl">
		<Shows />
	</div>
</main>
