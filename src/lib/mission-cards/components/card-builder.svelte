<script lang="ts">
	import BottomPanelLayout from './bottom-panel.layout.svelte';
	import MissionCard from './mission-card.svelte';
	import type { Mission } from '../types/mission.interface';
	import type { CardTheme } from '../../themes/';
	import * as themes from '../../themes/';

	const missions: Mission[] = [
		{
			name: 'Critical personnel',
			text: 'Destroy one or more critical personnel.\nWhen this card is drawn each player must choose one friendly unit on the battlefield designated as critical personnel.',
			reward: '1VP'
		},
		{
			name: 'Mass casualties',
			text: 'Destroy two or more enemy units.',
			reward: '1VP'
		},
		{
			name: 'Seize control',
			text: 'Control 1 or more objective markers that was controlled by an opponent at the start of the round.',
			reward: '1VP'
		},
		{
			name: 'Hold the line',
			text: 'Have no enemy units within your deployment zone.',
			reward: '1VP'
		},
		{
			name: 'Domination',
			text: 'Control the most objective markers at the end of the round.',
			reward: '2VP'
		},
		{
			name: 'Play it safe',
			text: 'Do not lose any friendly units this round.',
			reward: '2VP'
		},
		{
			name: 'High value target',
			text: 'Destroy the most expensive enemy unit by points cost.\nIn case of a tie, any counts.',
			reward: '2VP'
		}, 
		{
			name: 'Seize consecutive',
			text: 'Control two objectives with consecutive number. \n1 & 6 are consecutive.',
			reward: '2VP'
		},
		{
			name: 'Steady progress',
			text: 'Control more objectives at the end of the turn, than you did at the start of the turn.',
			reward: '1VP'
		},
	];

	type ThemeOption = {
		key: string;
		label: string;
		theme: CardTheme;
	};

	const themeOptions: ThemeOption[] = Object.entries(themes)
		.map(([key, theme]) => ({
			key,
			label: theme.name,
			theme
		}));

	let selectedThemeKey = themeOptions[0]?.key ?? '';

	$: activeTheme =
		themeOptions.find((option) => option.key === selectedThemeKey)?.theme ?? themeOptions[0]?.theme;

	function printCards() {
		window.print();
	}
</script>

<div class="theme-picker print-hidden">
	<span class="theme-label">Theme</span>
	<div class="theme-buttons" role="group" aria-label="Select card theme">
		{#each themeOptions as option}
			<button
				type="button"
				class:active-theme={option.key === selectedThemeKey}
				class="theme-button"
				onclick={() => (selectedThemeKey = option.key)}
			>
				{option.label}
			</button>
		{/each}
	</div>
</div>

<section class="print-area">
	<div class="card-grid">
		{#each missions as mission}
			{#if activeTheme}
				<MissionCard {mission} layout={BottomPanelLayout} theme={activeTheme} />
			{/if}
		{/each}
	</div>
</section>

<div class="actions print-hidden">
	<button type="button" class="print-button" onclick={printCards}>Print Cards</button>
</div>

<style>
	.theme-picker {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	.theme-label {
		font-size: 0.85rem;
		font-weight: 600;
		color: rgba(226, 232, 240, 0.76);
	}

	.theme-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}

	.theme-button {
		border: 1px solid rgba(226, 232, 240, 0.18);
		border-radius: 999px;
		padding: 0.45rem 0.85rem;
		font: inherit;
		font-size: 0.88rem;
		font-weight: 600;
		color: rgba(226, 232, 240, 0.92);
		background: rgba(255, 255, 255, 0.04);
		cursor: pointer;
		box-shadow: none;
		transition:
			background 120ms ease,
			border-color 120ms ease,
			color 120ms ease;
	}

	.theme-button:hover {
		background: rgba(255, 255, 255, 0.08);
		color: rgba(226, 232, 240, 0.98);
	}

	.theme-button.active-theme {
		border-color: rgba(167, 223, 127, 0.45);
		background: rgba(167, 223, 127, 0.16);
		color: #f5efe4;
	}

	.actions {
		display: flex;
		justify-content: flex-end;
		margin-top: 0.85rem;
	}

	.print-button {
		border: 1px solid rgba(226, 232, 240, 0.18);
		border-radius: 999px;
		padding: 0.45rem 0.8rem;
		font: inherit;
		font-size: 0.88rem;
		font-weight: 600;
		color: rgba(226, 232, 240, 0.76);
		background: rgba(255, 255, 255, 0.04);
		cursor: pointer;
		box-shadow: none;
	}

	.print-button:hover {
		background: rgba(255, 255, 255, 0.08);
		color: rgba(226, 232, 240, 0.92);
	}

	.print-area {
		width: 100%;
	}

	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, 63mm);
		gap: 1rem;
		justify-content: center;
	}

	@media print {
		.print-hidden {
			display: none !important;
		}

		.print-area {
			width: auto;
		}

		.card-grid {
			gap: 0;
			justify-content: start;
		}
	}
</style>
