const placeOrder = async (req, res) => {
    res.send("Order Placed! By " + req?.user?.name)
}


const orderControllers = { placeOrder }

export default orderControllers