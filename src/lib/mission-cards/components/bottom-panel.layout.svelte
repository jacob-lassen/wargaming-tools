<script lang="ts">
	import type { Mission } from '../types/mission.interface';
	import type { CardTheme } from '../../themes/card-theme.interface';

	let {
		mission,
		theme
	}: {
		mission: Mission;
		theme: CardTheme;
	} = $props();

	const paragraphs = $derived(mission.text.split('\n').filter(Boolean));
	const layoutStyle = $derived([
		`--color-primary: ${theme.palette.primary}`,
		`--color-accent: ${theme.palette.accent}`,
		`--color-accent-soft: ${theme.palette.accentSoft}`,
		`--text-main: ${theme.text.primary}`,
		`--text-accent: ${theme.text.accent}`,
		`--card-chrome-bg: ${theme.effects?.chromeBackground ?? 'none'}`,
		`--color-border: ${theme.surface.border}`,
	].join('; '));
</script>

<div class="bottom-panel-layout" style={layoutStyle}>
	<div class="card-chrome"></div>

	<header class="card-header">
		<h2>{mission.name}</h2>
	</header>

	<section class="card-body">
		{#each paragraphs as paragraph}
			<p>{paragraph}</p>
		{/each}
	</section>

	<footer class="reward-footer">
		<span>Reward</span>
		<strong>{mission.reward}</strong>
	</footer>
</div>

<style>
	.bottom-panel-layout {
		position: relative;
		display: flex;
		flex: 1;
		flex-direction: column;
		height: 100%;
		box-sizing: border-box;
		padding: 1rem;
		color: var(--text-main);
	}

	.card-chrome {
		position: absolute;
		inset: 0;
		pointer-events: none;
		background: var(--card-chrome-bg);
	}

	.card-header,
	.card-body,
	.reward-footer {
		position: relative;
		z-index: 1;
	}

	.card-header {
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
	}

	.card-header h2 {
		margin: 0;
		font-size: 1rem;
		line-height: 1.05;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.card-body {
		margin-top: 0.85rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.card-body p {
		margin: 0;
		font-size: 0.79rem;
		line-height: 1.42;
	}

	.reward-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 -1rem -1rem;
		padding: 0.85rem 1rem;
		background: var(--color-accent);
		border-top: 1px solid var(--color-border);
		font-size: 0.52rem;
		text-transform: uppercase;
		letter-spacing: 0.16em;
	}

	.reward-footer span {
		color: var(--text-accent);
	}

	.reward-footer strong {
		display: block;
		margin-top: 0;
		font-size: 0.92rem;
		line-height: 1;
		letter-spacing: 0.04em;
		color: var(--text-accent);
	}
</style>
