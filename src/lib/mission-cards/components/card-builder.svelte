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

</script>

<section class="intro">
	<h1>Mission Card Templates</h1>
	<p>
		Previewing the selected mission card layout. We can now build the generator around this
		bottom panel style.
	</p>
</section>

<div class="card-grid">
	<MissionCard mission={missions[0]} template="bottom-panel" />
</div>

<style>
	.intro {
		margin-bottom: 1.5rem;
	}

	.intro h1 {
		margin: 0 0 0.4rem;
		font-size: clamp(1.7rem, 2.6vw, 2.2rem);
		font-weight: 700;
	}

	.intro p {
		margin: 0;
		max-width: 46rem;
		color: rgba(226, 232, 240, 0.72);
	}

	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, 63mm);
		gap: 1rem;
		justify-content: center;
	}
</style>
