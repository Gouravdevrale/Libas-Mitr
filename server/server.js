import express from "express"
import colors from "colors"
import connectDB from "./config/dbConfig.js"

// Local Imports
import errorHandler from "./middlewares/errorHandler.js"
import authRoutes from "./routes/authRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"
import coupanRoutes from "./routes/coupanRoutes.js"



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

// Order Routes
app.use("/api/order", orderRoutes)

// Admin Routes
app.use("/api/admin", adminRoutes)

// Product Routes
app.use("/api/products", productRoutes)

// Cart Routes
app.use("/api/cart", cartRoutes)

//coupan Routes
app.use("/api/coupan", coupanRoutes)


// Error Handler
app.use(errorHandler)

app.listen(PORT, () =>
     console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.bgBlue
     ))