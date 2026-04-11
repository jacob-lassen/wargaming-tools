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
		layout: Component<{ mission: Mission }>;
		theme: CardTheme;
	} = $props();

	const themeVariables = $derived([
		`--card-bg: ${theme.surface.background}`,
		`--card-border: ${theme.surface.border}`,
		`--card-shadow: ${theme.surface.shadow}`,
		`--color-primary: ${theme.palette.primary}`,
		`--color-secondary: ${theme.palette.secondary}`,
		`--color-accent: ${theme.palette.accent}`,
		`--color-accent-soft: ${theme.palette.accentSoft}`,
		`--text-main: ${theme.text.primary}`,
		`--text-muted: ${theme.text.muted}`,
		`--card-chrome-bg: ${theme.effects?.chromeBackground ?? 'none'}`
	].join('; '));
</script>

<article class="mission-card" style={themeVariables}>
	<div class="card-chrome"></div>
	<Layout {mission} />
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
		padding: 1rem;
		background: var(--card-bg);
		border: 1px solid var(--card-border);
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

	.card-chrome {
		position: absolute;
		inset: 0;
		pointer-events: none;
		background: var(--card-chrome-bg);
	}

	.mission-card :global(.card-header),
	.mission-card :global(.card-body),
	.mission-card :global(.reward-footer) {
		position: relative;
		z-index: 1;
	}

	.mission-card :global(.card-header) {
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
	}

	.mission-card :global(.card-body) {
		margin-top: 0.85rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.mission-card :global(.card-header h2) {
		margin: 0;
		font-size: 1rem;
		line-height: 1.05;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.mission-card :global(.card-body p) {
		margin: 0;
		font-size: 0.79rem;
		line-height: 1.42;
	}

	.mission-card :global(.reward-footer) {
		font-size: 0.52rem;
		text-transform: uppercase;
		letter-spacing: 0.16em;
	}

	.mission-card :global(.reward-footer span) {
		color: var(--text-muted);
	}

	.mission-card :global(.reward-footer strong) {
		display: block;
		margin-top: 0;
		font-size: 0.92rem;
		line-height: 1;
		letter-spacing: 0.04em;
		color: var(--text-main);
	}

	.mission-card :global(.reward-footer) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 -1rem -1rem;
		padding: 0.85rem 1rem;
		background: var(--color-secondary);
		border-top: 1px solid var(--color-accent-soft);
	}

	@media print {
		.mission-card {
			box-shadow: none;
			margin: 0;
		}
	}
</style>
