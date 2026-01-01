import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth/authSlice"
import admin from "./admin/adminSlice"
import product from "./products/productSlice"
import cart from "./cart/cartSlice"
import order from "./order/orderSlice"

const store = configureStore({
    reducer: { auth, admin, product, cart, order }
})


export default store