import { ChampionModel } from "../models/champion-model"
import { StatisticsModel } from "../models/statistics-model"

const database: ChampionModel[] = [
    {
        id: 1,
        name: "Sett",
        from: "Ionia",
        lane: "Top",
        statistics: {
            baseAttack: 60,
            baseAttackSpeed: 0.625,
            baseArmor: 33,
            baseMagicResistence: 28,
            baseHealth: 600,
            baseMana: 0,
            baseMovementSpeed: 340,
            criticalStrikeChance: 0,
        }
    },
    {
        id: 2,
        name: "Evelynn",
        from: "Runeterra",
        lane: "Jungle",
        statistics: {
            baseAttack: 61,
            baseAttackSpeed: 0.667,
            baseArmor: 37,
            baseMagicResistence: 32,
            baseHealth: 620,
            baseMana: 315,
            baseMovementSpeed: 335,
            criticalStrikeChance: 0,
        }
    },
    {
        id: 3,
        name: "Yone",
        from: "Ionia",
        lane: "Mid",
        statistics: {
            baseAttack: 60,
            baseAttackSpeed: 0.625,
            baseArmor: 30,
            baseMagicResistence: 32,
            baseHealth: 590,
            baseMana: 500,
            baseMovementSpeed: 345,
            criticalStrikeChance: 0,
        }
    },
    {
        id: 4,
        name: "Yasuo",
        from: "Ionia",
        lane: "Mid",
        statistics: {
            baseAttack: 60,
            baseAttackSpeed: 0.697,
            baseArmor: 30,
            baseMagicResistence: 32,
            baseHealth: 590,
            baseMana: 0,
            baseMovementSpeed: 345,
            criticalStrikeChance: 0,
        }
    },
    {
        id: 5,
        name: "Gragas",
        from: "Freljord",
        lane: "Jungle",
        statistics: {
            baseAttack: 64,
            baseAttackSpeed: 0.675,
            baseArmor: 38,
            baseMagicResistence: 32,
            baseHealth: 600,
            baseMana: 400,
            baseMovementSpeed: 330,
            criticalStrikeChance: 0,
        }
    },
    {
        id: 6,
        name: "Mordekaiser",
        from: "Ilhas das Sombras",
        lane: "Top",
        statistics: {
            baseAttack: 61,
            baseAttackSpeed: 0.625,
            baseArmor: 37,
            baseMagicResistence: 32,
            baseHealth: 645,
            baseMana: 0,
            baseMovementSpeed: 335,
            criticalStrikeChance: 0,
        }
    },
    {
        id: 7,
        name: "Lee Sin",
        from: "Ionia",
        lane: "Jungle",
        statistics: {
            baseAttack: 70,
            baseAttackSpeed: 0.651,
            baseArmor: 36,
            baseMagicResistence: 32,
            baseHealth: 645,
            baseMana: 200,
            baseMovementSpeed: 345,
            criticalStrikeChance: 0,
        }
    },
    {
        id: 8,
        name: "Nasus",
        from: "Shurima",
        lane: "Top",
        statistics: {
            baseAttack: 67,
            baseAttackSpeed: 0.638,
            baseArmor: 34,
            baseMagicResistence: 32,
            baseHealth: 640,
            baseMana: 326,
            baseMovementSpeed: 350,
            criticalStrikeChance: 0,
        }
    },
    {
        id: 9,
        name: "Jax",
        from: "Icathia",
        lane: "Top",
        statistics: {
            baseAttack: 68,
            baseAttackSpeed: 0.638,
            baseArmor: 36,
            baseMagicResistence: 32,
            baseHealth: 635,
            baseMana: 339,
            baseMovementSpeed: 350,
            criticalStrikeChance: 0,
        }
    },
    {
        id: 10,
        name: "Ornn",
        from: "Freljord",
        lane: "Top",
        statistics: {
            baseAttack: 63,
            baseAttackSpeed: 0.625,
            baseArmor: 30,
            baseMagicResistence: 32,
            baseHealth: 620,
            baseMana: 0,
            baseMovementSpeed: 340,
            criticalStrikeChance: 0,
        }
    },
    {
        id: 11,
        name: "Vayne",
        from: "Demacia",
        lane: "Bot",
        statistics: {
            baseAttack: 50,
            baseAttackSpeed: 0.658,
            baseArmor: 26,
            baseMagicResistence: 30,
            baseHealth: 500,
            baseMana: 200,
            baseMovementSpeed: 330,
            criticalStrikeChance: 0,
        }
    },
    {
        id: 12,
        name: "Pyke",
        from: "Bilgewater",
        lane: "Support",
        statistics: {
            baseAttack: 57,
            baseAttackSpeed: 0.625,
            baseArmor: 30,
            baseMagicResistence: 32,
            baseHealth: 570,
            baseMana: 200,
            baseMovementSpeed: 345,
            criticalStrikeChance: 0,
        }
    },
    {
        id: 13,
        name: "Yuumi",
        from: "Bilgewater",
        lane: "Support",
        statistics: {
            baseAttack: 50,
            baseAttackSpeed: 0.625,
            baseArmor: 29,
            baseMagicResistence: 30,
            baseHealth: 480,
            baseMana: 1000,
            baseMovementSpeed: 330,
            criticalStrikeChance: 0,
        }
    },
    {
        id: 14,
        name: "Caitlyn",
        from: "Piltover",
        lane: "Bot",
        statistics: {
            baseAttack: 61,
            baseAttackSpeed: 0.658,
            baseArmor: 28,
            baseMagicResistence: 30,
            baseHealth: 500,
            baseMana: 315,
            baseMovementSpeed: 330,
            criticalStrikeChance: 0,
        }
    },
    {
        id: 15,
        name: "Ezreal",
        from: "Piltover",
        lane: "Bot",
        statistics: {
            baseAttack: 55,
            baseAttackSpeed: 0.658,
            baseArmor: 27,
            baseMagicResistence: 30,
            baseHealth: 530,
            baseMana: 375,
            baseMovementSpeed: 330,
            criticalStrikeChance: 0,
        }
    },
    {
        id: 16,
        name: "Braum",
        from: "Freljord",
        lane: "Support",
        statistics: {
            baseAttack: 55,
            baseAttackSpeed: 0.625,
            baseArmor: 40,
            baseMagicResistence: 32,
            baseHealth: 600,
            baseMana: 300,
            baseMovementSpeed: 330,
            criticalStrikeChance: 0,
        }
    }
]

const findAllChampions = async (): Promise<ChampionModel[]> => {
    return database
}

const findChampionById = async (id: number): Promise<ChampionModel | undefined> => {
    return database.find(champ => champ.id === id)
}

const insertChampion = async (champion: ChampionModel) => {
    database.push(champion)
}

const deleteOneChampion = async (id: number) => {
    const index = database.findIndex((champ) => champ.id === id)

    if (index !== -1) {
        database.splice(index, 1)
        return true
    }

    return false
}

const findAndModifyChampion = async (id: number, statistics: StatisticsModel): Promise<ChampionModel> => {
    const championIndex = database.findIndex(champ => champ.id  === id)

    if (championIndex !== -1) {
        database[championIndex].statistics = statistics
    }

    return database[championIndex]
}

export {
    findAllChampions,
    findChampionById,
    insertChampion,
    deleteOneChampion,
    findAndModifyChampion
}