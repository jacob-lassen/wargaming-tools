export interface Unit {
    name: string;
    cost: string;
    stats: UnitStat[];
    specialRules: string[];
    weapons: Weapon[];
}

export interface UnitStat {
    name: string;
    value: string;
}

export interface Weapon {
    name: string;
    stats: string[];
}
