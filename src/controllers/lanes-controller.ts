import {Request, Response}  from "express"
import { getAllLanesService } from "../services/lanes-service"

const getLanes  = async (request: Request, response: Response) => {
    const httpResponse = await getAllLanesService()
    response.status(httpResponse.statusCode).json(httpResponse.body)
}

export {
    getLanes
}