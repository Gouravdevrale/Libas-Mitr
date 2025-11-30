import Order from "../models/orderModal.js"
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

const addProduct = async (req, res) => {
    res.send("Product Added!")
}

const updateProduct = async (req, res) => {
    res.send("Product Updated!")
}

const updateOrder = async (req, res) => {
    res.send("Order Updated!")
}

const getAllOrders = async (req, res) => {
   
  let orders = await Order.find()

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


const adminControllers = { getAllUsers, addProduct, updateProduct, updateOrder, getAllOrders, getAllReviews }


export default adminControllers