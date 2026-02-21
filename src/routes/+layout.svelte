<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Navbar class="border-b bg-slate-950 px-4 py-2.5">
	<NavBrand href={resolve('/')} class="text-xl font-semibold text-slate-200">Wargame Tools</NavBrand>
	<NavHamburger />
	<NavUl activeUrl={page.url.pathname}>
		<NavLi href={resolve('/info-cards')} class="text-slate-200">Info cards</NavLi>
	</NavUl>
</Navbar>

<main class="min-h-screen bg-slate-900 text-slate-200">
	<div class="mx-auto w-full max-w-6xl px-4 py-8">
	{@render children()}
	</div>
</main>
