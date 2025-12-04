import Coupan from "../models/coupanModel.js"

const applyCoupon = async (req, res) => {

    if (!req.body.coupanCode) {
        res.status(409)
        throw new Error("Please Enter Coupon")
    }


    // Find If Coupon Exists
    let coupon = await Coupan.findOne({ coupanCode: req.body.coupanCode })


    if (!coupon) {
        res.status(404)
        throw new Error("Invalid Coupon Code!")
    }


    res.status(200).json(coupon)
}



const coupanController = { applyCoupon }

export default coupanController