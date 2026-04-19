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
		`--card-shadow: ${theme.surface.shadow}`,
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
		box-shadow:
			0 18px 32px -20px var(--card-shadow),
			inset 0 1px 0 rgba(255, 255, 255, 0.08);
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
			box-shadow: none;
			margin: 0;
		}
	}
</style>
