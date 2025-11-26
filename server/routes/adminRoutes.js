import express from "express"

// local imports

import adminControllers from "../controllers/adminController.js"
import protect from "../middlewares/authMiddleware.js"

const router = express.Router()

router.get("/users", protect.forAdmin, adminControllers.getAllUsers)


export default router