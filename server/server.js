import express from "express"
import colors from "colors"
import connectDB from "./config/dbConfig.js"

// Local Imports
import authRoutes from "./routes/authRoutes.js"

const app = express()
const PORT = process.env.PORT || 5000

// DB CONNECTION
connectDB()

// Body-Parser
app.use(express.json())
app.use(express.urlencoded())


app.get("/", (req, res) => {
    res.json({
        message: "WELCOME TO LIBAS MITR API 1.0"
    })
})

// Auth Routes
app.use("/api/auth", authRoutes)

app.listen(PORT, () =>
     console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.bgBlue
     ))