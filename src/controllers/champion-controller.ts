import {Request, Response}  from "express"
import { deleteChampionService, getChampionByIdService, getChampionService, postChampionService, updateChampionService } from "../services/champions-service"
import { StatisticsModel } from "../models/statistics-model"

const getChampion = async (request: Request, response: Response) => {

    const httpResponse = await getChampionService()

    response.status(httpResponse.statusCode).json(httpResponse.body)
}

const getChampionById = async (request: Request, response: Response)  => {
    const id = parseInt(request.params.id)

    const httpResponse = await getChampionByIdService(id)
    
    response.status(httpResponse.statusCode).json(httpResponse.body)
}

const postChampion = async (request: Request, response: Response) => {
    const bodyValue = request.body

    const httpResponse = await postChampionService(bodyValue)

    if (httpResponse) {
        response.status(httpResponse.statusCode).json(httpResponse.body)
    } 
}

const deleteChampion = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id)
    const httpResponse = await deleteChampionService(id)

    response.status(httpResponse.statusCode).json(httpResponse.body)
}

const updateChampion = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id)
    const bodyValue: StatisticsModel = request.body
    const httpResponse =  await updateChampionService(id, bodyValue)
    response.status(httpResponse.statusCode).json(httpResponse.body)

}

export {
    getChampion,
    getChampionById,
    postChampion,
    deleteChampion,
    updateChampion
}