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



const adminControllers = { getAllUsers }


export default adminControllers