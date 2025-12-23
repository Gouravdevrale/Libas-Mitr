import axios from "axios"


const API_URL = "/api/admin"

const fetchAllUsers = async (token) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + "/users", options)
    return response.data
}

const fetchAllOrders = async (token) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + "/orders", options)
    return response.data
}


const userUpdate = async (userData, token) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }


    const response = await axios.put(API_URL + "/users/" + userData.userId, userData, options)
    return response.data


}


const addProduct = async (formData, token) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }


    const response = await axios.post(API_URL + "/product/add", formData, options)
    return response.data

}

const updateProduct = async (formData, productId, token) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }


    const response = await axios.put(API_URL + "/product/" + productId, formData, options)
    return response.data

}


const getProducts = async () => {
    const response = await axios.get("/api/products")
    return response.data
}


const adminService = { fetchAllUsers, fetchAllOrders, userUpdate, getProducts, addProduct, updateProduct }


export default adminService