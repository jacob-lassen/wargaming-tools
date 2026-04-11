<script lang="ts">
	import type { Component } from 'svelte';
	import type { Mission } from '../types/mission.interface';

	export type MissionCardTheme = 'bottom-panel';

	let {
		mission,
		layout: Layout,
		theme = 'bottom-panel'
	}: {
		mission: Mission;
		layout: Component<{ mission: Mission }>;
		theme?: MissionCardTheme;
	} = $props();
</script>

<article class="mission-card" data-theme={theme}>
	<div class="card-chrome"></div>
	<Layout {mission} />
</article>

<style>
	.mission-card {
		--card-bg: linear-gradient(180deg, #18251f 0%, #09100c 100%);
		--card-border: rgba(255, 255, 255, 0.14);
		--card-shadow: rgba(0, 0, 0, 0.35);
		--accent: #a7df7f;
		--accent-soft: rgba(167, 223, 127, 0.14);
		--text-main: #f5efe4;
		--text-muted: rgba(245, 239, 228, 0.72);
		--reward-footer-bg: rgba(167, 223, 127, 0.14);
		--reward-footer-border: rgba(167, 223, 127, 0.18);
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
		background: var(--reward-footer-bg);
		border-top: 1px solid var(--reward-footer-border);
	}

	@media print {
		.mission-card {
			box-shadow: none;
			margin: 0;
		}
	}
</style>
