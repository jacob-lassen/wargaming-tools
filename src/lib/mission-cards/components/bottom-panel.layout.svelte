<script lang="ts">
	import type { Mission } from '../types/mission.interface';

	let { mission }: { mission: Mission } = $props();

	const paragraphs = $derived(mission.text.split('\n').filter(Boolean));
</script>

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
