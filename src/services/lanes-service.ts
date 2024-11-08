import { listAllLanes } from "../repositories/lanes-repository"
import { ok } from "../utils/http-helper"

const getAllLanesService =  async () => {
    const data = await listAllLanes()
    const response = ok(data)
    return response
}

export {
    getAllLanesService
}