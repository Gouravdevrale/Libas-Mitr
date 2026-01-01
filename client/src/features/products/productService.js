import axios from "axios"

const API_URL = '/api/products'

const fetchProducts = async () => {
    const response = await axios.get(API_URL)
    return response.data
}

const fetchProduct = async (pid) => {
    const response = await axios.get(API_URL + "/" + pid)
    return response.data
}


const productService = { fetchProducts, fetchProduct }


export default productService