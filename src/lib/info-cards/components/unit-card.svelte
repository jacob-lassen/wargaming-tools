<script lang="ts">
	import type { Unit } from '../types/unit.interface';

	let { unit }: { unit: Unit } = $props();
</script>

<article class="unit-card bg-taupe-950 border-taupe-600 border-1 text-taupe-200">
	<header class="top-row">
		<h2>{unit.name}</h2>
		<span class="cost-pill bg-red-900">{unit.cost}</span>
	</header>

	<section class="stat-strip">
		{#each unit.stats as stat}
			<div class="stat-item">
				<span class="stat-label">{stat.name}</span>
				<span class="stat-value">{stat.value}</span>
			</div>
		{/each}
	</section>

	<section>
		<ul>
			{#each unit.specialRules as rule}
				<li>{rule}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>WEAPONS</h2>
		<ul>
			{#each unit.weapons as weapon}
				<li>{weapon.name} ({weapon.stats.join(', ')})</li>
			{/each}
		</ul>
	</section>
</article>

<style>
	.unit-card {
		width: 63mm;
		height: 88mm;
		box-sizing: border-box;
		border-radius: 14px;
		padding: 1.15rem;
		position: relative;
		overflow: hidden;
	}

	@media (max-width: 640px) {
		.unit-card {
			width: min(100%, 63mm);
		}
	}

	.top-row {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		padding-bottom: 0.85rem;
	}

	.cost-pill {
		padding: 0.1rem 0.3rem;
		font-size: 0.75rem;
		font-weight: 700;
		border-radius: 6px;
		text-transform: lowercase;
	}

	h2 {
		margin: 0;
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 0.02em;
	}

	.stat-strip {
		border-top: 2px solid rgba(180, 55, 76, 0.75);
		border-bottom: 1px solid rgba(255, 255, 255, 0.18);
		padding: 0.8rem 0;
		display: flex;
		gap: 0.45rem;
		background: rgba(8, 10, 14, 0.52);
		border-radius: 8px;
		justify-content: flex-start;
		padding-left: 0.6rem;
	}

	.stat-item {
		min-width: 2.8rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.stat-label {
		font-size: 0.58rem;
		text-transform: uppercase;
		opacity: 0.65;
		letter-spacing: 0.08em;
	}

	.stat-value {
		font-size: 1.15rem;
		line-height: 1.1;
		font-weight: 700;
	}

	section {
		padding-top: 0.95rem;
	}

	h3 {
		margin: 0 0 0.4rem;
		font-size: 0.83rem;
		letter-spacing: 0.11em;
		font-weight: 800;
		color: #f0f2f6;
	}

	ul {
		margin: 0;
		padding-left: 0.8rem;
	}

	li {
		font-size: 0.9rem;
		line-height: 1.4;
	}
</style>
