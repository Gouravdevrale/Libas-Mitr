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



const adminControllers = { getAllUsers, addProduct, updateProduct, updateOrder }


export default adminControllers