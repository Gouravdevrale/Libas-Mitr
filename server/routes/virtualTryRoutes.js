import express from "express"
import protect from "../middlewares/authMiddleware.js"
import { virtualTry } from "../controllers/virtualTryController.js"

const router = express.Router()


router.get("/", protect.forAuthUsers, virtualTry)


export default router