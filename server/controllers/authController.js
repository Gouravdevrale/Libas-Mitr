import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"



// Local Import
import User from "../models/userModel.js"

const registerUser = async(req, res)=>{


 // Check If all fields are filled
const {name, email, phone, password, address} = req.body

 if (!name || !email || !phone || !password || !address) {
        res.status(409)
        throw new Error('Please Fill All Details!')
    }

     // Check if user exist 

    let emailExist = await User.findOne({ email })
    let phoneExist = await User.findOne({ phone })

    if (emailExist || phoneExist) {
        res.status(409)
        throw new Error('User Already Exist!')
    }

    // Hash Password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt)


    // Create User 
    const user = await User.create({
        name: name,
        email: email,
        phone: phone,
        password: hashedPassword,
        address: address
    })

    if (!user) {
        res.status(400)
        throw new Error("User Not Created!")
    } else {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            token: generateToken(user._id)
        })
        
    }

    // res.send("User Registered")
}
const loginUser = async(req, res)=>{

     // Check If all fields are filled
    const { email, password } = req.body

    if (!email || !password) {
        res.status(409)
        throw new Error('Please Fill All Details!')
    }

    // // Check if user exist
    let user = await User.findOne({ email })

    // Check Credentials
    if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error("Invalid Credentials")
    }
    // res.send("User Login")
}

// Token Generator
const generateToken = (id) => {
    let token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
    return token
}
3

const authService={
    registerUser, loginUser
}

export default authService