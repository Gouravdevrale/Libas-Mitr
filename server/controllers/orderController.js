import Cart from "../models/cartModel.js";
import Coupan from "../models/coupanModel.js";
import Order from "../models/orderModal.js";

const placeOrder = async (req, res) => {

 const userId = req.user._id;
    const { coupon } = req.body

    // Find If Coupon Exists
    let couponCode = await Coupan.findOne({ coupanCode: coupon })


    if (!couponCode) {
        res.status(404)
        throw new Error("Invalid Coupon Code!")
    }


    // Find Cart
    const cart = await Cart.findOne({ user: userId })
        .populate('products.product');

    if (!cart) {
        res.status(404)
        throw new Error("Cart not found")
    }

    let totalBill = cart.products.reduce((acc, product) => {
        return acc + product.product.salePrice * product.qty
    }, 0)

    // Apply Coupan Discount
    totalBill = totalBill - (totalBill * couponCode.coupanDiscount / 100)


    const order = {
        user: userId,
        cart: cart,
        totalBillAmount: totalBill,
        isDiscounted: couponCode ? true : false,
        coupon: couponCode._id,
    }


    let newOrder = await Order.create(order)

    if (!order) {
        res.status(409)
        throw new Error("Order Not Created!")
    }

    res.status(201).json(newOrder)



    // res.send("Order Placed! By " + req?.user?.name)
}


const cancelOrder = async (req, res) => {
    res.send("Order Canceled! By " + req?.user?.name)
}

const getOrders = async (req, res) => {
    res.send("My Orders")
}

const getOrder = async (req, res) => {
    res.send("My Order")
}


const orderControllers = { placeOrder, cancelOrder, getOrders, getOrder }

export default orderControllers