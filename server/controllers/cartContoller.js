const getCart = async (req, res) => {
    res.send("Your Cart Here...")
}

const addCart = async (req, res) => {
    res.send("Your Cart Added...")
}

const updateCart = async (req, res) => {
    res.send("Your Cart Updated...")
}

const removeCart = async (req, res) => {
    res.send("Your Cart Removed...")
}

const cartController = { getCart, addCart, updateCart, removeCart }


export default cartController