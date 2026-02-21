<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Navbar class="border-b bg-mist-900 px-4 py-2.5">
	<NavBrand href={resolve('/')} class="text-xl font-semibold text-mist-200">Wargame Tools</NavBrand>
	<NavHamburger />
	<NavUl activeUrl={page.url.pathname}>
		<NavLi href={resolve('/info-cards')} class="text-mist-200">Info cards</NavLi>
	</NavUl>
</Navbar>

<main class="min-h-screen bg-mist-950 text-mist-200">
	<div class="mx-auto w-full max-w-6xl px-4 py-8">
	{@render children()}
	</div>
</main>
