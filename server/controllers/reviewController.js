import Review from "../models/reviewModel.js"

const getReviews = async (req, res) => {
    
     let reviews = await Review.find({ product: req.params.pid })

    if (!reviews) {
        res.status(404)
        throw new Error("Reviews Not Found!")
    } else {
        res.status(200).json(reviews)
    }
}

const getReview = async (req, res) => {
    
     let review = await Review.findById(req.params.pid)

    if (!review) {
        res.status(404)
        throw new Error("Review Not Found!")
    } else {
        res.status(200).json(review)
    }
}


const addReview = async (req, res) => {
    res.send("Product Review Added!!")
}

const reviewController = { getReviews, addReview, getReview }


export default reviewController