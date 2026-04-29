<script lang="ts">
	import type { Component } from 'svelte';
	import type { Mission } from '../types/mission.interface';
	import type { CardTheme } from '../../themes/card-theme.interface';

	let {
		mission,
		layout: Layout,
		theme
	}: {
		mission: Mission;
		layout: Component<{ mission: Mission; theme: CardTheme }>;
		theme: CardTheme;
	} = $props();

	const hostStyle = $derived([
		`--card-bg: ${theme.surface.background}`,
		`--card-border: ${theme.surface.border}`,
		`--text-main: ${theme.text.primary}`
	].join('; '));
</script>

<article class="mission-card" style={hostStyle}>
	<Layout {mission} {theme} />
</article>

<style>
	.mission-card {
		width: 63mm;
		height: 88mm;
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		border-radius: 16px;
		background: var(--card-bg);
		border: 2px solid var(--card-border);
		color: var(--text-main);
		print-color-adjust: exact;
		-webkit-print-color-adjust: exact;
		break-inside: avoid;
		page-break-inside: avoid;
	}

	@media (max-width: 640px) {
		.mission-card {
			width: min(100%, 63mm);
		}
	}

	@media print {
		.mission-card {
			margin: 0;
		}
	}
</style>
