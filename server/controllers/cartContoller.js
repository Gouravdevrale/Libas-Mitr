import Cart from "../models/cartModel.js";


const getCart = async (req, res) => {
    // res.send("Your Cart Here...")
      const cart = await Cart.find({ user: req.user.id })
        .populate({
            path: 'user',
            select: '-password' // exclude password for security
        })
        .populate({
            path: 'products.product',
            model: 'Product', // replace with your actual Product model name
        });
    if (!cart) {
        res.status(404)
        throw new Error('No Cart Found!')
    }



    res.json(cart)
}

const addCart = async (req, res) => {
    // res.send("Your Cart Added...")
     const { product, qty } = req.body

    if (!product || !qty) {
        res.status(409)
        throw new Error("Please Fill All Details!")
    }

    //    Check if we have cart already 
    const cartExist = await Cart.findOne({ user: req.user.id })

    if (cartExist) {
        res.status(409)
        throw new Error('Cart Already Exists!')
    }

    

    let cart = {
        user: req.user.id,
        products: [
            { product: req.body.product, qty: req.body.qty }

        ]
    }

    await Cart.create(cart)

    if (!cart) {
        res.status(409)
        throw new Error('Cart Not Created!')
    } else {
        res.status(201).json(cart)
    }
}

const updateCart = async (req, res) => {
    // res.send("Your Cart Updated...")

     const { product, qty } = req.body

    if (!product || !qty) {
        res.status(409)
        throw new Error("Please Fill All Details!")
    }

    //    Check if we have cart already 

//  const existingCart = await Cart.findOne({ user: req.user.id })
//  existingCart.products.push(product, qty)


    res.json(existingCart)
}

const removeCart = async (req, res) => {
    res.send("Your Cart Removed...")
}

const cartController = { getCart, addCart, updateCart, removeCart }


export default cartController