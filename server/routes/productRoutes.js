import express from "express"

// Local Imports
import productController from "../controllers/productController.js"
import reviewRoute from "./reviewRoutes.js"

const router = express.Router({mergeParams: true})

router.get("/", productController.getProducts)
router.get("/:pid", productController.getProduct)


router.use("/:pid/review", reviewRoute)


export default router