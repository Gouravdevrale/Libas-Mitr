const placeOrder = async (req, res) => {
    res.send("Order Placed! By " + req?.user?.name)
}


const cancelOrder = async (req, res) => {
    res.send("Order Canceled! By " + req?.user?.name)
}


const orderControllers = { placeOrder, cancelOrder }

export default orderControllers