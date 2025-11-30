const getProducts = async (req, res) => {
    res.send("All Products Here!")
}

const getProduct = async (req, res) => {
    res.send("Product Here!")
}


const productController = { getProduct, getProducts }


export default productController