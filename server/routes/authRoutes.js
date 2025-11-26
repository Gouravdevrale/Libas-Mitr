import express from "express"
import authService from "../controllers/authController.js"
const router = express.Router()

const {registerUser, loginUser}= authService

router.post("/register", registerUser)
router.post("/login", loginUser)

export default router