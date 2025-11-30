import express from "express"

// local imports

import adminControllers from "../controllers/adminController.js"
import protect from "../middlewares/authMiddleware.js"

const router = express.Router()

// For Users
router.get("/users", protect.forAdmin, adminControllers.getAllUsers)

// For Products
router.post("/product/add", protect.forAdmin, adminControllers.addProduct)
router.put("/product/:id", protect.forAdmin, adminControllers.updateProduct)

// For Order
router.put("/order/:oid", protect.forAdmin, adminControllers.updateOrder)


export default router