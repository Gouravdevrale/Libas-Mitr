import axios from "axios"

const API_URL = '/api/order'

const placeOrder = async (token, orderDetails) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, orderDetails, options)
    return response.data

}

const fetchMyOrders = async (token) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, options)
    return response.data

}


const orderService = { placeOrder, fetchMyOrders }

export default orderService