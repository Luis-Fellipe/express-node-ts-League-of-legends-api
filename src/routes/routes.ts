import { Router } from "express";
import { deleteChampion, getChampion, getChampionById, postChampion, updateChampion } from "../controllers/champion-controller";
import { getLanes } from "../controllers/lanes-controller";

const router = Router()

router.get("/champions", getChampion)
router.get("/champions/:id", getChampionById)
router.post("/champions", postChampion)
router.delete("/champions/:id", deleteChampion)
router.patch("/champions/:id", updateChampion)

// lane controllers abaixo

router.get("/lanes", getLanes)

export {
    router
}