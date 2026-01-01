import { Link } from 'react-router-dom'
import React from 'react'

const ProductCard = ({ product }) => {

    const customStyle = {
        backgroundImage: `url(${product.image})`,
    }


    return (
        <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div style={customStyle} className="aspect-[3/4] bg-gray-200 relative bg-center bg-cover">

                <span className="absolute top-4 left-4 bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Get {((product.originalPrice - product.salePrice) / product.originalPrice) * 100}% Discount
                </span>
            </div>
            <div className="p-5">
                <h3 className="font-bold text-neutral-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.category}</p>
                <p className="text-2xl font-bold text-neutral-900 mb-4">₹{product.salePrice}</p>
                <div className="flex gap-2">
                    <Link to={`/collections/${product._id}`} className="flex-1 text-center bg-gradient-to-r from-violet-600 to-purple-600 text-white py-2.5 rounded-xl font-medium hover:from-violet-700 hover:to-purple-700 transition-all">
                        Try Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
