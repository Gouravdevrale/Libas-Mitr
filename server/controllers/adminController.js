import fs from "node:fs"
import uploadToCloudinary from "../middlewares/cloudinaryMiddleware.js"
import Coupan from "../models/coupanModel.js"
import Order from "../models/orderModal.js"
import Product from "../models/productModel.js"
import Review from "../models/reviewModel.js"
import User from "../models/userModel.js"

const getAllUsers = async (req, res) => {

    let users = await User.find()

    if (!users) {
        res.status(404)
        throw new Error("Users Not Found!")
    } else {
        res.status(200).json(users)
    }

}


const updateUser = async (req, res) => {

    let userId = req.params.uid

    const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true })

    if (!updatedUser) {
        res.status(409)
        throw new Error("User Not Updated!")
    }

    res.status(200).json(updatedUser)

}

const addProduct = async (req, res) => {
   
    try{
      const { name, description, originalPrice, salePrice, stock, category, size } = req.body

    if (!name || !description || !originalPrice || !salePrice || !stock || !category || !size) {
        res.status(409)
        throw new Error('Please Fill All Details!')
    }

      //   Upload To Cloudinary
       let imagePath = await uploadToCloudinary(req.file.path)

        // Remove image from our server
        fs.unlinkSync(req.file.path)

    const product = await Product.create({
        name,
        description,
        size,
        originalPrice,
        salePrice,
        stock,
        category,
        image: imagePath.secure_url
    })

    if (!product) {
        res.status(409)
        throw new Error('Product Not Created!')
    } else {
        res.status(201).json(product)
    }
  } catch(error) {
        fs.unlinkSync(req?.file?.path)
        res.status(500)
        throw new Error('Product Not Created!')
    }
    // console.log(req.body);
    // res.send("Product Added!")
    
}

const updateProduct = async (req, res) => {
    // res.send("Product Updated!")
     let product = await Product.findById(req.params.pid)

    if (!product) {
        res.status(404)
        throw new Error('Product Not Found!')
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.pid, req.body, { new: true })

    if (!updatedProduct) {
        res.status(409)
        throw new Error('Product Not Updated!')
    } else {
        res.status(200).json(updatedProduct)
    }
}

const updateOrder = async (req, res) => {
    // res.send("Order Updated!")

     const orderId = req.params.oid
     const { status } = req.body

    const myOrder = await Order.findById(orderId).populate('products.product').populate('user')

    if (!myOrder) {
        res.status(404)
        throw new Error('Order Not Found!')
    }

     if (myOrder.status === "dispatched") {
        res.status(409)
        throw new Error("Order is already dispatched")
    }

     // Stock Updation
    const updateStock = async (productId, updatedStock) => {
        await Product.findByIdAndUpdate(productId, { stock: updatedStock })
    }

     let updatedOrder

    if (status === "dispatched") {

        // Update Stock
        myOrder.products.forEach((item) => {
            let productId = item.product._id
            let productStock = item.product.stock
            updateStock(productId, productStock - item.qty)
        })

        updatedOrder = await Order.findByIdAndUpdate(orderId, { status: "dispatched" }, { new: true }).populate("products.product")
    } else {
        updatedOrder = await Order.findByIdAndUpdate(orderId, { status: status === "delivered" ? "delivered" : "cancelled" }, { new: true })
    }

    // const updatedOrder = await Order.findByIdAndUpdate(orderId, req.body, { new: true })

    if (!updatedOrder) {
        res.status(409)
        throw new Error("Order Cannot Be Cancelled!")
    }


    res.status(200).json(updatedOrder)
}

const getAllOrders = async (req, res) => {
   
  let orders = await Order.find().populate('products').populate('user')

    if (!orders) {
        res.status(404)
        throw new Error("Orders Not Found!")
    } else {
        res.status(200).json(orders)
    }
}

const getAllReviews = async (req, res) => {
     let reviews = await Review.find()

    if (!reviews) {
        res.status(404)
        throw new Error("Reviews Not Found!")
    } else {
        res.status(200).json(reviews)
    }
}

const createCoupon = async (req, res) => {

    const { coupanCode, coupanDiscount } = req.body

    if (!coupanCode) {
        res.status(409)
        throw new Error("Please Type Coupon")
    }

    const newCoupon = await Coupan.create({ coupanCode: coupanCode.toUpperCase(), coupanDiscount })

    if (!newCoupon) {
        res.status(409)
        throw new Error("Coupon Not Created")
    }

    res.status(201).json(newCoupon)

}

const getCoupons = async (req, res) => {
    const coupons = await Coupan.find()

    if (!coupons) {
        res.status(404)
        throw new Error("Coupons Not Found!")
    }

    res.status(200).json(coupons)

}


const adminControllers = { getAllUsers, addProduct, updateProduct, updateOrder, getAllOrders, getAllReviews, createCoupon, getCoupons, updateUser }


export default adminControllers