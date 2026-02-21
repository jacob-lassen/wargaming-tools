export interface Unit {
    name: string;
    cost: string;
    stats: Record<string, string>;
    specialRules: string[];
    weapons: Weapon[];
}

export interface Weapon {
    name: string;
    stats: string[];
}