import { Link } from 'react-router-dom'
import React from 'react'

const ProductCard = () => {

    const customStyle = {
        backgroundImage: `url('https://thehouseofrare.com/cdn/shop/files/mano-mens-t-shirt-white27624_12378c0a-13fe-4ae7-898c-97937bbc2aae.jpg?v=1719483708')`,
    }


    return (
        <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div style={customStyle} className="aspect-[3/4] bg-gray-200 relative bg-center bg-cover">

                <span className="absolute top-4 left-4 bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Virtual Try-On Available
                </span>
            </div>
            <div className="p-5">
                <h3 className="font-bold text-neutral-900 mb-1">Elegant Summer Dress</h3>
                <p className="text-sm text-gray-600 mb-3">Dresses</p>
                <p className="text-2xl font-bold text-neutral-900 mb-4">$89.99</p>
                <div className="flex gap-2">
                    <Link to={"/collections/123"} className="flex-1 text-center bg-gradient-to-r from-violet-600 to-purple-600 text-white py-2.5 rounded-xl font-medium hover:from-violet-700 hover:to-purple-700 transition-all">
                        Try Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
