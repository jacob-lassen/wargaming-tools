<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Navbar class="border-b bg-white px-4 py-2.5">
	<NavBrand href="/" class="text-xl font-semibold">Wargame Tools</NavBrand>
	<NavHamburger />
	<NavUl activeUrl={page.url.pathname}>
		<NavLi href="/info-cards">Info cards</NavLi>
	</NavUl>
</Navbar>

<main class="mx-auto w-full max-w-6xl px-4 py-8">
	{@render children()}
</main>
