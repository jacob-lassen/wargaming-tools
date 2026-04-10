<script lang="ts">
	import type { Mission } from '../types/mission.interface';

	export type MissionTemplate =
		| 'banner-top'
		| 'reward-bottom'
		| 'side-rail'
		| 'centered'
		| 'split-header'
		| 'stamp-corner'
		| 'bottom-panel'
		| 'outline-box'
		| 'floating-reward'
		| 'data-strip'
		| 'poster'
		| 'wild-diagonal';

	let {
		mission,
		template
	}: {
		mission: Mission;
		template: MissionTemplate;
	} = $props();

	const paragraphs = $derived(mission.text.split('\n').filter(Boolean));
	const layout = $derived({
		headerReward: ['banner-top', 'split-header', 'stamp-corner', 'outline-box'].includes(template),
		bottomReward: ['reward-bottom', 'bottom-panel', 'poster'].includes(template),
		sideReward: ['side-rail'].includes(template),
		floatingReward: ['floating-reward', 'wild-diagonal'].includes(template),
		inlineReward: ['centered', 'data-strip'].includes(template)
	});
</script>

<article class={`mission-card template-${template}`}>
	<div class="card-chrome"></div>

	{#if layout.sideReward}
		<aside class="reward-rail">
			<span>Reward</span>
			<strong>{mission.reward}</strong>
		</aside>
	{/if}

	{#if layout.floatingReward}
		<div class="reward-badge reward-floating">
			<span>Reward</span>
			<strong>{mission.reward}</strong>
		</div>
	{/if}

	<header class="card-header">
		{#if template === 'banner-top'}
			<div class="title-band">
				<h2>{mission.name}</h2>
			</div>
			<div class="divider"></div>
		{:else if template === 'centered'}
			<div class="title-stack">
				<h2>{mission.name}</h2>
				<div class="reward-inline">
					<span>Reward</span>
					<strong>{mission.reward}</strong>
				</div>
			</div>
		{:else if template === 'split-header'}
			<div class="header-row">
				<h2>{mission.name}</h2>
				<div class="reward-badge">
					<span>Reward</span>
					<strong>{mission.reward}</strong>
				</div>
			</div>
			<div class="subtitle-line"></div>
		{:else if template === 'stamp-corner'}
			<h2>{mission.name}</h2>
			<div class="reward-stamp">
				<span>Reward</span>
				<strong>{mission.reward}</strong>
			</div>
		{:else if template === 'outline-box'}
			<div class="outline-header">
				<h2>{mission.name}</h2>
				<div class="reward-badge">
					<span>Reward</span>
					<strong>{mission.reward}</strong>
				</div>
			</div>
		{:else if template === 'data-strip'}
			<div class="data-heading">
				<h2>{mission.name}</h2>
				<div class="reward-inline reward-chip">
					<span>Reward</span>
					<strong>{mission.reward}</strong>
				</div>
			</div>
		{:else if template === 'poster'}
			<div class="poster-header">
				<span class="mini-label">Mission</span>
				<h2>{mission.name}</h2>
			</div>
		{:else if template === 'wild-diagonal'}
			<div class="wild-title">
				<h2>{mission.name}</h2>
			</div>
		{:else}
			<h2>{mission.name}</h2>
			{#if layout.headerReward}
				<div class="reward-badge">
					<span>Reward</span>
					<strong>{mission.reward}</strong>
				</div>
			{/if}
		{/if}
	</header>

	<section class="card-body">
		{#each paragraphs as paragraph, index}
			<p class:lead-line={index === 0 && template === 'poster'}>{paragraph}</p>
		{/each}
	</section>

	{#if layout.bottomReward}
		<footer class="reward-footer">
			<span>Reward</span>
			<strong>{mission.reward}</strong>
		</footer>
	{/if}
</article>

<style>
	.mission-card {
		--card-bg: linear-gradient(160deg, #20262f 0%, #10141a 100%);
		--card-border: rgba(255, 255, 255, 0.14);
		--card-shadow: rgba(0, 0, 0, 0.35);
		--accent: #d3a35b;
		--accent-soft: rgba(211, 163, 91, 0.18);
		--text-main: #f5efe4;
		--text-muted: rgba(245, 239, 228, 0.72);
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

	.card-header,
	.card-body,
	.reward-footer,
	.reward-rail,
	.reward-floating {
		position: relative;
		z-index: 1;
	}

	.card-header {
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
	}

	.card-body {
		margin-top: 0.85rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	h2 {
		margin: 0;
		font-size: 1rem;
		line-height: 1.05;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	p {
		margin: 0;
		font-size: 0.79rem;
		line-height: 1.42;
	}

	.reward-badge,
	.reward-inline,
	.reward-footer,
	.reward-rail,
	.reward-floating,
	.reward-stamp {
		font-size: 0.52rem;
		text-transform: uppercase;
		letter-spacing: 0.16em;
	}

	.reward-badge span,
	.reward-inline span,
	.reward-footer span,
	.reward-rail span,
	.reward-floating span,
	.reward-stamp span,
	.mini-label {
		color: var(--text-muted);
	}

	.reward-badge strong,
	.reward-inline strong,
	.reward-footer strong,
	.reward-rail strong,
	.reward-floating strong,
	.reward-stamp strong {
		display: block;
		margin-top: 0.15rem;
		font-size: 0.92rem;
		line-height: 1;
		letter-spacing: 0.04em;
		color: var(--text-main);
	}

	.reward-badge,
	.reward-floating {
		padding: 0.45rem 0.55rem;
		border-radius: 10px;
		background: var(--accent-soft);
		border: 1px solid rgba(255, 255, 255, 0.08);
	}

	.reward-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 0.75rem;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.reward-footer strong {
		margin-top: 0;
	}

	.title-band {
		margin: -1rem -1rem 0;
		padding: 0.9rem 1rem 0.8rem;
		background: rgba(255, 255, 255, 0.08);
	}

	.divider,
	.subtitle-line {
		height: 1px;
		background: rgba(255, 255, 255, 0.14);
	}

	.title-stack {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 0.65rem;
	}

	.header-row,
	.data-heading,
	.outline-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 0.75rem;
	}

	.reward-inline {
		display: inline-flex;
		align-items: baseline;
		gap: 0.35rem;
		padding: 0.28rem 0.45rem;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.06);
	}

	.reward-inline strong {
		display: inline;
		margin-top: 0;
		font-size: 0.8rem;
	}

	.reward-stamp {
		position: absolute;
		top: 0.9rem;
		right: 0.9rem;
		padding: 0.7rem 0.55rem;
		border-radius: 999px;
		min-width: 3.2rem;
		text-align: center;
		background: var(--accent-soft);
		border: 1px solid rgba(255, 255, 255, 0.1);
		transform: rotate(10deg);
	}

	.reward-rail {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 3.2rem;
		padding: 1rem 0.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		background: rgba(255, 255, 255, 0.06);
		border-left: 1px solid rgba(255, 255, 255, 0.12);
	}

	.reward-rail strong {
		writing-mode: vertical-rl;
		transform: rotate(180deg);
		margin-top: 0.45rem;
	}

	.reward-floating {
		position: absolute;
		top: 0.9rem;
		right: 0.9rem;
		z-index: 2;
	}

	.outline-header {
		padding: 0.75rem;
		border: 1px solid rgba(255, 255, 255, 0.14);
		border-radius: 14px;
	}

	.poster-header {
		padding-top: 0.35rem;
	}

	.poster-header h2 {
		font-size: 1.2rem;
		line-height: 0.95;
		max-width: 80%;
	}

	.mini-label {
		display: block;
		margin-bottom: 0.5rem;
		font-size: 0.55rem;
		text-transform: uppercase;
		letter-spacing: 0.18em;
	}

	.lead-line {
		font-size: 0.9rem;
		line-height: 1.25;
		font-weight: 700;
	}

	.wild-title {
		max-width: 70%;
		padding-top: 0.4rem;
	}

	.template-banner-top {
		--card-bg:
			linear-gradient(180deg, #301616 0%, #171013 100%);
		--accent: #f0c16e;
		--accent-soft: rgba(240, 193, 110, 0.16);
	}

	.template-banner-top .card-chrome {
		background:
			radial-gradient(circle at top right, rgba(240, 193, 110, 0.18), transparent 24%),
			linear-gradient(180deg, transparent 0 24%, rgba(255, 255, 255, 0.03) 24% 25%, transparent 25%);
	}

	.template-reward-bottom {
		--card-bg: linear-gradient(180deg, #1f2732 0%, #0f141a 100%);
		--accent: #91d0ff;
		--accent-soft: rgba(145, 208, 255, 0.14);
	}

	.template-reward-bottom .card-body {
		padding-top: 0.5rem;
	}

	.template-side-rail {
		--card-bg: linear-gradient(180deg, #122f31 0%, #091618 100%);
		--accent: #73d6c6;
		--accent-soft: rgba(115, 214, 198, 0.12);
		padding-right: 4.1rem;
	}

	.template-side-rail .card-chrome {
		background: radial-gradient(circle at top left, rgba(115, 214, 198, 0.18), transparent 22%);
	}

	.template-centered {
		--card-bg: linear-gradient(180deg, #2f2416 0%, #17120d 100%);
		--accent: #f6d37b;
		--accent-soft: rgba(246, 211, 123, 0.14);
	}

	.template-centered .card-body {
		justify-content: center;
		text-align: center;
		padding-inline: 0.35rem;
	}

	.template-split-header {
		--card-bg: linear-gradient(180deg, #241a30 0%, #0f0f19 100%);
		--accent: #ba9cff;
		--accent-soft: rgba(186, 156, 255, 0.14);
	}

	.template-stamp-corner {
		--card-bg: linear-gradient(180deg, #f0e2bf 0%, #dbc69d 100%);
		--card-border: rgba(90, 68, 39, 0.25);
		--card-shadow: rgba(59, 42, 18, 0.18);
		--text-main: #3a2917;
		--text-muted: rgba(58, 41, 23, 0.7);
		--accent: #8d6030;
		--accent-soft: rgba(141, 96, 48, 0.12);
	}

	.template-stamp-corner .card-body {
		margin-top: 1.25rem;
		padding: 0.85rem;
		border: 1px dashed rgba(90, 68, 39, 0.25);
		border-radius: 14px;
		background: rgba(255, 255, 255, 0.18);
	}

	.template-bottom-panel {
		--card-bg: linear-gradient(180deg, #18251f 0%, #09100c 100%);
		--accent: #a7df7f;
		--accent-soft: rgba(167, 223, 127, 0.14);
	}

	.template-bottom-panel .reward-footer {
		margin: 0 -1rem -1rem;
		padding: 0.85rem 1rem;
		background: rgba(167, 223, 127, 0.14);
		border-top: 1px solid rgba(167, 223, 127, 0.18);
	}

	.template-outline-box {
		--card-bg: linear-gradient(180deg, #181d27 0%, #0b0f16 100%);
		--accent: #8fa9ff;
		--accent-soft: rgba(143, 169, 255, 0.14);
	}

	.template-outline-box .card-body {
		padding: 0.85rem;
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 14px;
		background: rgba(255, 255, 255, 0.03);
	}

	.template-floating-reward {
		--card-bg: linear-gradient(180deg, #2e1621 0%, #140b10 100%);
		--accent: #ff9cb9;
		--accent-soft: rgba(255, 156, 185, 0.16);
		padding-top: 1.4rem;
	}

	.template-floating-reward .card-body {
		margin-top: 1.2rem;
	}

	.template-data-strip {
		--card-bg: linear-gradient(180deg, #18222b 0%, #0a1117 100%);
		--accent: #79d2ff;
		--accent-soft: rgba(121, 210, 255, 0.14);
	}

	.template-data-strip .card-body {
		padding-top: 0.5rem;
		border-top: 1px solid rgba(121, 210, 255, 0.18);
	}

	.template-poster {
		--card-bg:
			radial-gradient(circle at top, rgba(255, 142, 89, 0.18), transparent 28%),
			linear-gradient(180deg, #261515 0%, #0f0b0d 100%);
		--accent: #ff8e59;
		--accent-soft: rgba(255, 142, 89, 0.16);
	}

	.template-poster .card-body {
		justify-content: flex-end;
	}

	.template-poster .reward-footer {
		margin-top: 0.35rem;
	}

	.template-wild-diagonal {
		--card-bg: linear-gradient(160deg, #101525 0%, #090b12 100%);
		--accent: #c59bff;
		--accent-soft: rgba(197, 155, 255, 0.18);
		padding-top: 1.25rem;
	}

	.template-wild-diagonal .card-chrome {
		background:
			linear-gradient(145deg, transparent 0 44%, rgba(197, 155, 255, 0.16) 44% 48%, transparent 48%),
			radial-gradient(circle at 18% 22%, rgba(197, 155, 255, 0.18), transparent 20%);
	}

	.template-wild-diagonal .card-body {
		margin-top: auto;
		padding: 0.85rem;
		border-radius: 18px 18px 0 0;
		background: rgba(9, 11, 18, 0.78);
		backdrop-filter: blur(8px);
	}

	.template-wild-diagonal .reward-floating {
		border-radius: 999px;
		padding: 0.9rem 0.7rem;
		top: 1rem;
		right: 1rem;
	}
</style>
