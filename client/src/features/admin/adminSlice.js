import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import adminService from './adminService';

const initialState = {
    adminIsLoading: false,
    adminIsSuccess: false,
    adminIsError: false,
    adminErrorMessage: "",
    allUsers: [],
    allProducts: [],
    allOrders: [],
    allCoupons: []
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsersForAdmin.pending, (state, action) => {
                state.adminIsLoading = true
                state.adminIsSuccess = false
                state.adminIsError = false
                state.adminErrorMessage = ""
            })
            .addCase(getAllUsersForAdmin.fulfilled, (state, action) => {
                state.adminIsLoading = false
                state.adminIsSuccess = true
                state.allUsers = action.payload
                state.adminIsError = false
                state.adminErrorMessage = ""
            })
            .addCase(getAllUsersForAdmin.rejected, (state, action) => {
                state.adminIsLoading = false
                state.adminIsSuccess = false
                state.adminIsError = true
                state.adminErrorMessage = action.payload
            })
            .addCase(getAllOrdersForAdmin.pending, (state, action) => {
                state.adminIsLoading = true
                state.adminIsSuccess = false
                state.adminIsError = false
                state.adminErrorMessage = ""
            })
            .addCase(getAllOrdersForAdmin.fulfilled, (state, action) => {
                state.adminIsLoading = false
                state.adminIsSuccess = true
                state.allOrders = action.payload
                state.adminIsError = false
                state.adminErrorMessage = ""
            })
            .addCase(getAllOrdersForAdmin.rejected, (state, action) => {
                state.adminIsLoading = false
                state.adminIsSuccess = false
                state.adminIsError = true
                state.adminErrorMessage = action.payload
            })
            .addCase(updateUser.pending, (state, action) => {
                state.adminIsLoading = true
                state.adminIsSuccess = false
                state.adminIsError = false
                state.adminErrorMessage = ""
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.adminIsLoading = false
                state.adminIsSuccess = true
                state.allUsers = state.allUsers.map(user => user._id === action.payload._id ? action.payload : user)
                state.adminIsError = false
                state.adminErrorMessage = ""
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.adminIsLoading = false
                state.adminIsSuccess = false
                state.adminIsError = true
                state.adminErrorMessage = action.payload
            })
    }
});

export const { } = adminSlice.actions

export default adminSlice.reducer



// FETCH ALL USERS
export const getAllUsersForAdmin = createAsyncThunk("FETCH/ADMIN/USERS", async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await adminService.fetchAllUsers(token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

// FETCH ALL ORDERS
export const getAllOrdersForAdmin = createAsyncThunk("FETCH/ADMIN/ORDERS", async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await adminService.fetchAllOrders(token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})


// UPDATE USER
export const updateUser = createAsyncThunk("UPDATE/ADMIN/USER", async (userData, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await adminService.userUpdate(userData, token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})