<script lang="ts">
	import MissionCard from './mission-card.svelte';
	import type { Mission } from '../types/mission.interface';

	const missions: Mission[] = [
		{
			name: 'Critical personnel',
			text: 'Destroy critical personnel.\nWhen card is drawn each player must choose one unit on the battlefield army to be critical personnel.',
			reward: '1VP'
		}
	];

	function printCards() {
		window.print();
	}
</script>

<section class="print-area">
	<div class="card-grid">
		<MissionCard mission={missions[0]} template="bottom-panel" />
	</div>
</section>

<div class="actions print-hidden">
	<button type="button" class="print-button" onclick={printCards}>Print Cards</button>
</div>

<style>
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
