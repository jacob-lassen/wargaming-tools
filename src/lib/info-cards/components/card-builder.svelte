<script lang="ts">
	import UnitCard from './unit-card.svelte';
	import type { Unit } from '../types/unit.interface';

	const units: Unit[] = [
        {
            "name": "Inquisitor",
            "cost": "100pts",
            "stats": {
            "Q": "3+",
            "D": "3+"
            },
            "specialRules": [
            "Hero",
            "Tough(3)",
            "Inquisitorial Agent",
            "Fortified",
            "Precision Fighter Aura"
            ],
            "weapons": [
            {
                "name": "Chain-Fist",
                "stats": [
                "A1",
                "AP(2)",
                "Deadly(3)"
                ]
            }
            ]
        },
        {
            "name": "Inquisitorial Officer",
            "cost": "40pts",
            "stats": {
            "Q": "4+",
            "D": "5+"
            },
            "specialRules": [
            "Inquisitorial Agent",
            "Hero",
            "Tough(3)"
            ],
            "weapons": [
            {
                "name": "CCW",
                "stats": [
                "A2"
                ]
            },
            {
                "name": "Needle Pistol",
                "stats": [
                "12\"",
                "A1",
                "Bane"
                ]
            }
            ]
        },
        {
            "name": "Dog",
            "cost": "20pts",
            "stats": {
            "Q": "4+",
            "D": "4+"
            },
            "specialRules": [
            "Inquisitorial Agent",
            "Fortified"
            ],
            "weapons": [
            {
                "name": "CCW",
                "stats": [
                "A2"
                ]
            }
            ]
        },
        {
            "name": "Crusader Henchman",
            "cost": "45pts",
            "stats": {
            "Q": "4+",
            "D": "4+"
            },
            "specialRules": [
            "Inquisitorial Agent",
            "Fortified",
            "Furious Aura"
            ],
            "weapons": [
            {
                "name": "Chainsaw Sword",
                "stats": [
                "A2",
                "AP(2)"
                ]
            }
            ]
        },
        {
            "name": "Crusader Henchman",
            "cost": "30pts",
            "stats": {
            "Q": "4+",
            "D": "4+"
            },
            "specialRules": [
            "Inquisitorial Agent",
            "Fortified"
            ],
            "weapons": [
            {
                "name": "Chainsaw Sword",
                "stats": [
                "A2",
                "AP(2)"
                ]
            }
            ]
        },
        {
            "name": "Crusader Henchman",
            "cost": "30pts",
            "stats": {
            "Q": "4+",
            "D": "4+"
            },
            "specialRules": [
            "Inquisitorial Agent",
            "Fortified"
            ],
            "weapons": [
            {
                "name": "Chainsaw Sword",
                "stats": [
                "A2",
                "AP(2)"
                ]
            }
            ]
        },
        {
            "name": "Gunsmith Henchman",
            "cost": "35pts",
            "stats": {
            "Q": "4+",
            "D": "4+"
            },
            "specialRules": [
            "Inquisitorial Agent",
            "Unpredictable Shooter",
            "Piercing Tag(2)"
            ],
            "weapons": [
            {
                "name": "Claws",
                "stats": [
                "A1"
                ]
            },
            {
                "name": "Long Rifle",
                "stats": [
                "30\"",
                "A1"
                ]
            }
            ]
        }
        ];
</script>

<div class="card-grid">
	{#each units as unit}
		<UnitCard {unit} />
	{/each}
</div>

<style>
	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, max-content));
		gap: 1rem;
		justify-content: center;
	}
</style>
