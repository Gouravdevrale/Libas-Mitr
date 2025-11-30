import express from "express"

// local imports

import orderControllers from "../controllers/orderController.js"
import protect from "../middlewares/authMiddleware.js"

const router = express.Router()

router.post("/", protect.forAuthUsers, orderControllers.placeOrder)
router.put("/:oid", protect.forAuthUsers, orderControllers.cancelOrder)


export default router