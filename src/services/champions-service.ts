import { ChampionModel } from "../models/champion-model"
import { StatisticsModel } from "../models/statistics-model"
import { deleteOneChampion, findAllChampions, findAndModifyChampion, findChampionById, insertChampion } from "../repositories/champions-repository"
import { badRequest, created, noContent, ok } from "../utils/http-helper"

const getChampionService = async () => {
    const data = await findAllChampions()

    let responseData = null

    if (data) {
        responseData = await ok(data)
    } else {
        responseData = await noContent()
    }
    return responseData
}

const getChampionByIdService = async (id: number) => {
    const data = await findChampionById(id)

    let responseData = null

    if (data) {
        responseData = await ok(data)
    } else {
        responseData = await noContent()
    }
    return responseData
}

const postChampionService = async (champion: ChampionModel) => {
    let responseData = null
    if (Object.keys(champion).length !== 0) {
        await insertChampion(champion)
        responseData = await created()
    } else {
        responseData = await badRequest()
    }

    return responseData
}

const deleteChampionService = async (id: number) => {
    let response = null
    const isDeleted = await deleteOneChampion(id)

    if (isDeleted === true) {
        response = await ok({message: "deleted"})
    } else {
        response = await badRequest()
    }

    return response
}

const updateChampionService = async (id: number, statistics: StatisticsModel) => {
    const data = await findAndModifyChampion(id, statistics)
    let response = null

    if (Object.keys(data).length === 0) {
        response = await ok(data)
    } else {
        response = await ok(data)

    }
    return response
}

export {
    getChampionService,
    getChampionByIdService,
    postChampionService,
    deleteChampionService,
    updateChampionService
}