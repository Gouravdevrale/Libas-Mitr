const placeOrder = async (req, res) => {
    res.send("Order Placed! By " + req?.user?.name)
}


const cancelOrder = async (req, res) => {
    res.send("Order Canceled! By " + req?.user?.name)
}

const getOrders = async (req, res) => {
    res.send("My Orders")
}

const getOrder = async (req, res) => {
    res.send("My Order")
}


const orderControllers = { placeOrder, cancelOrder, getOrders, getOrder }

export default orderControllers