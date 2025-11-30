import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart',
        required: true
    },
    totalBillAmount: {
        type: Number,
        required: true
    },
    isDisounted: {
        type: Boolean,
        required: true,
        default: false
    },
    coupan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coupan',
    },
    status: {
        type: String,
        enum: ["placed", "dispatched", "cancelled", "delivered"],
        default: "pending",
        required: true
    }

}, {
    timestamps: true
})


const Order = mongoose.model("Order", orderSchema)

export default Order