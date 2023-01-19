<script lang="ts">
	import Images from '../components/Images.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Shows from '../components/Shows.svelte';
</script>

<svelte:head>
	<title>เบคอน | Home</title>
</svelte:head>

<main class="flex flex-col items-center w-full min-h-screen">
	<Navbar />
	<Images />

	<div class="lg:max-w-5xl max-w-2xl">
		<Shows />
	</div>
</main>
