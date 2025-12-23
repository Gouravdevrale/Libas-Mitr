import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";



const getCart = async (req, res) => {
    // res.send("Your Cart Here...")
    //Day 11
    //   const cart = await Cart.find({ user: req.user.id })
    //     .populate({
    //         path: 'user',
    //         select: '-password' // exclude password for security
    //     })
    //     .populate({
    //         path: 'products.product',
    //         model: 'Product', // replace with your actual Product model name
    //     });
    // if (!cart) {
    //     res.status(404)
    //     throw new Error('No Cart Found!')
    // }



    // res.json(cart)

    // OR

     const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId })
        .populate('products.product');

    if (!cart) {
        return res.status(200).json({
            products: []
        });
    }

    res.status(200).json(cart);
}

// const addCart = async (req, res) => {
//     // res.send("Your Cart Added...")
//      const { product, qty } = req.body

//     if (!product || !qty) {
//         res.status(409)
//         throw new Error("Please Fill All Details!")
//     }

//     //    Check if we have cart already 
//     const cartExist = await Cart.findOne({ user: req.user.id })

//     if (cartExist) {
//         res.status(409)
//         throw new Error('Cart Already Exists!')
//     }

    

//     let cart = {
//         user: req.user.id,
//         products: [
//             { product: req.body.product, qty: req.body.qty }

//         ]
//     }

//     await Cart.create(cart)

//     if (!cart) {
//         res.status(409)
//         throw new Error('Cart Not Created!')
//     } else {
//         res.status(201).json(cart)
//     }
// }

// OR

const addToCart = async (req, res) => {

    const { productId, qty = 1 } = req.body;
    const userId = req.user._id; // user is attached via auth middleware

    // Validate product exists
    const product = await Product.findById(productId);

    if (!product) {
        res.status(404)
        throw new Error("Product Not Found!")
    }

    // Check if product is in stock
    if (product.stock < qty) {
        res.status(400)
        throw new Error("Insufficient Stock")
    }

    // Find user's cart
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
        // Create new cart if doesn't exist
        cart = new Cart({
            user: userId,
            products: [{ product: productId, qty }]
        });
    } else {
        // Check if product already exists in cart
        const productIndex = cart.products.findIndex(
            (item) => item.product.toString() === productId
        );

        if (productIndex > -1) {
            // Update quantity if product exists
            cart.products[productIndex].qty += parseInt(qty);

            // Check total quantity against stock
            if (cart.products[productIndex].qty > product.stock) {
                res.status(400)
                throw new Error("Quantity exceeds available stock")
            }
        } else {
            // Add new product to cart
            cart.products.push({ product: productId, qty });
        }
    }

    await cart.save();

    // Populate product details for response
    await cart.populate('products.product');

    res.status(200).json(cart);


};

// const updateCart = async (req, res) => {
//     // res.send("Your Cart Updated...")

//      const { product, qty } = req.body

//     if (!product || !qty) {
//         res.status(409)
//         throw new Error("Please Fill All Details!")
//     }

//     //    Check if we have cart already 
// //ERROR 
// //  const existingCart = await Cart.findOne({ user: req.user.id })
// //  existingCart.products.push(product, qty)


//     res.json(existingCart)
// }

// const removeCart = async (req, res) => {
//     res.send("Your Cart Removed...")
// }

const updateCart = async (req, res) => {
    const { productId, qty } = req.body;
    const userId = req.user._id;

    // Validate quantity
    if (qty < 1) {
        res.status(400)
        throw new Error("Quantity must be at least 1")
    }

    // Find cart
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
        res.status(404)
        throw new Error("Cart not found")
    }

    // Find product in cart
    const productIndex = cart.products.findIndex(
        (item) => item.product.toString() === productId
    );

    if (productIndex === -1) {
        res.status(404)
        throw new Error("Product not found in cart")
    }

    // Check stock availability
    const product = await Product.findById(productId);
    if (!product) {
        res.status(404)
        throw new Error("Product not found")
    }

    if (qty > product.stock) {
        res.status(400)
        throw new Error("Quantity exceeds available stock")
    }

    // Update quantity
    cart.products[productIndex].qty = qty;

    await cart.save();
    await cart.populate('products.product');

    res.status(200).json(cart);
};

const removeCart = async (req, res) => {
    const { productId } = req.params;
    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
        res.status(404)
        throw new Error("Cart not found")
    }

    // Filter out the product
    cart.products = cart.products.filter(
        (item) => item.product.toString() !== productId
    );

    await cart.save();
    await cart.populate('products.product');

    res.status(200).json(cart);

};

// Clear Cart
const clearCart = async (req, res) => {

    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
        res.status(404)
        throw new Error("Cart Not Found!")
    }

    cart.products = [];
    await cart.save();

    res.status(200).json(cart);
};

const cartController = { getCart, addToCart, updateCart, removeCart, clearCart }


export default cartController