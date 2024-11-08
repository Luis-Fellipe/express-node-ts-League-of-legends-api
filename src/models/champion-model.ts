interface ChampionModel {
    id: number;
    name: string;
    from: string;
    lane: string;
    statistics: {
        baseAttack: number;
        baseAttackSpeed: number;
        baseArmor: number;
        baseMagicResistence: number;
        baseHealth: number;
        baseMana: number;
        baseMovementSpeed: number;
        criticalStrikeChance: number;
    };
}


export {
    ChampionModel
}