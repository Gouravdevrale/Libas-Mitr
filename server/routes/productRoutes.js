import express from "express"

// Local Imports
import productController from "../controllers/productController.js"

const router = express.Router()

router.get("/", productController.getProducts)
router.get("/:pid", productController.getProduct)


export default router