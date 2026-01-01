import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import orderService from './orderService';

const initialState = {
    orders: [],
    order: {},
    orderLoading: false,
    orderSuccess: false,
    orderError: false,
    orderErrorMessage: ""
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(checkoutWithOrder.pending, (state, action) => {
                state.orderLoading = true
                state.orderSuccess = false
                state.orderError = false
            })
            .addCase(checkoutWithOrder.fulfilled, (state, action) => {
                state.orderLoading = false
                state.orderSuccess = true
                state.order = action.payload
                state.orderError = false
            })
            .addCase(checkoutWithOrder.rejected, (state, action) => {
                state.orderLoading = false
                state.orderSuccess = false
                state.orderError = true
                state.orderErrorMessage = action.payload
            })
            .addCase(getMyOrders.pending, (state, action) => {
                state.orderLoading = true
                state.orderSuccess = false
                state.orderError = false
            })
            .addCase(getMyOrders.fulfilled, (state, action) => {
                state.orderLoading = false
                state.orderSuccess = true
                state.orders = action.payload
                state.orderError = false
            })
            .addCase(getMyOrders.rejected, (state, action) => {
                state.orderLoading = false
                state.orderSuccess = false
                state.orderError = true
                state.orderErrorMessage = action.payload
            })
    }
});

export const { } = orderSlice.actions

export default orderSlice.reducer


// Place Order
export const checkoutWithOrder = createAsyncThunk("CHECKOUT/ORDER", async (orderDetails, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await orderService.placeOrder(token, orderDetails)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

// Get Orders
export const getMyOrders = createAsyncThunk("GET/ORDERS", async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await orderService.fetchMyOrders(token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})