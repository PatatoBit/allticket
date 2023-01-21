<script>
	import Navbar from '../lib/components/Navbar.svelte';
	import '../styles/global.css';
</script>

<svete:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="ความหิวเป็นเหตุสังเกตได้" />
	<meta name="author" content="หมูเบคอน" />
	<meta name="author" content="patato" />
	<link rel="apple-touch-icon" href="apple-touch-icon.png" />
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
	<meta name="twitter:title" content="หมูเคคอน" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@patatotota" />
	<meta name="twitter:creator" content="@patatotota" />
	<meta name="twitter:image" content="https://baconmockup.com/862/470" />
	<meta property="og:site_name" content="หมูเบคอน" />
	<meta name="og:title" content="หมูเบคอน" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://baconmockup.com/862/470" />
	<title>หมูเบคอน - Home</title>
</svete:head>

<Navbar />
<slot />
