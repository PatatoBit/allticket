<script lang="ts">
	import Images from '../components/Images.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Shows from '../components/Shows.svelte';
</script>

<main class="flex flex-col justify center w-full min-h-screen">
	<Navbar />
	<Images />

	<div class="md:mx-60">
		<Shows />
	</div>
</main>
