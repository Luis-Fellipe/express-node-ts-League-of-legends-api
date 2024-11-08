import { json } from "express";
import { LanesModel } from "../models/lanes-model";
import fs from "fs/promises"

const listAllLanes = async (): Promise<LanesModel[]> => {
    const data = await fs.readFile("./src/data/lanes.json", "utf-8")
    const lanes: LanesModel[] = JSON.parse(data)
    return lanes
}

export {
    listAllLanes
}