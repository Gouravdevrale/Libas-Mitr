import express from "express"

// Local Imports
import cartController from "../controllers/cartContoller.js"
import protect from "../middlewares/authMiddleware.js"

const router = express.Router()

router.get("/", protect.forAuthUsers, cartController.getCart)
router.post("/", protect.forAuthUsers, cartController.addCart)
router.put("/", protect.forAuthUsers, cartController.updateCart)
router.delete("/", protect.forAuthUsers, cartController.removeCart)


export default router