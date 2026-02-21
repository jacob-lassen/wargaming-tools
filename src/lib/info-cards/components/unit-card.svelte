<script lang="ts">
	import type { Unit } from '../types/unit.interface';

	let { unit }: { unit: Unit } = $props();

	const statEntries = $derived(Object.entries(unit.stats));
</script>

<article class="unit-card">
	<header class="top-row">
		<h2>{unit.name}</h2>
		<span class="cost-pill">{unit.cost}</span>
	</header>

	<section class="stat-strip">
		{#each statEntries as [label, value]}
			<div class="stat-item">
				<span class="stat-label">{label}</span>
				<span class="stat-value">{value}</span>
			</div>
		{/each}
	</section>

	<section>
		<h3>SPECIAL RULES</h3>
		<ul>
			{#each unit.specialRules as rule}
				<li>{rule}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h3>WEAPONS</h3>
		<ul>
			{#each unit.weapons as weapon}
				<li>{weapon.name} ({weapon.stats.join(', ')})</li>
			{/each}
		</ul>
	</section>
</article>

<style>
	.unit-card {
		width: min(100%, 320px);
		border-radius: 14px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		padding: 1.15rem;
		color: #eef2f7;
		background:
			radial-gradient(circle at 0% 100%, rgba(255, 255, 255, 0.08), transparent 45%),
			linear-gradient(145deg, rgba(63, 67, 78, 0.95), rgba(20, 24, 33, 0.98));
		box-shadow:
			inset 0 0 0 1px rgba(255, 255, 255, 0.05),
			0 14px 24px rgba(0, 0, 0, 0.45);
		position: relative;
		overflow: hidden;
	}

	.unit-card::before {
		content: '';
		position: absolute;
		inset: 0;
		background: repeating-linear-gradient(
			-45deg,
			transparent 0,
			transparent 6px,
			rgba(255, 255, 255, 0.03) 6px,
			rgba(255, 255, 255, 0.03) 12px
		);
		pointer-events: none;
	}

	.unit-card > * {
		position: relative;
		z-index: 1;
	}

	.top-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 0.85rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.18);
	}

	h2 {
		margin: 0;
		font-size: 1.4rem;
		font-weight: 700;
		letter-spacing: 0.02em;
	}

	.cost-pill {
		background: #cc4040;
		color: #fff;
		padding: 0.3rem 0.6rem;
		font-size: 0.85rem;
		font-weight: 700;
		border-radius: 6px;
		text-transform: lowercase;
	}

	.stat-strip {
		margin-top: 0.95rem;
		border-top: 2px solid rgba(216, 61, 61, 0.75);
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
		margin-top: 0.95rem;
		padding-top: 0.95rem;
		border-top: 1px solid rgba(255, 255, 255, 0.18);
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
