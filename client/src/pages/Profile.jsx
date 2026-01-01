import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMyOrders } from '../features/order/orderSlice'

const Profile = () => {
    const { user } = useSelector(state => state.auth)
    const { order, orderSuccess, orderError, orderLoading, orderErrorMessage } = useSelector(state => state.order)


    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {

        // Fetch Orders
        dispatch(getMyOrders())



        if (!user) {
            navigate("/login")
        }


        if (orderError && orderErrorMessage) {
            toast.error(couponErrorMessage, { position: "top-center" })
        }


    }, [orderError, orderErrorMessage, user])






    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
                    <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
                    <span>/</span>
                    <span className="text-gray-900">My Account</span>
                </nav>

                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">My Account</h1>
                    <p className="text-gray-600">Manage your profile and orders</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-3xl font-bold mb-4">
                                    SC
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-1">{user.name}</h2>
                                <p className="text-gray-600 text-sm mb-1">{user.email}</p>
                                <p className="text-gray-600 text-sm mb-4">{user.phone}</p>
                                <p className="text-gray-500 text-xs mb-6">{user.address}</p>
                                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-xl transition-colors">
                                    Virtual Try Credits :   {user.credits}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h2>

                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                        <div className="mb-2 sm:mb-0">
                                            <p className="text-sm text-gray-500">Order ID</p>
                                            <p className="font-semibold text-gray-900">#MF2024-1234</p>
                                        </div>
                                        <div className="mb-2 sm:mb-0">
                                            <p className="text-sm text-gray-500">Date</p>
                                            <p className="font-medium text-gray-900">Dec 15, 2024</p>
                                        </div>
                                        <div className="mb-2 sm:mb-0">
                                            <p className="text-sm text-gray-500">Total</p>
                                            <p className="font-semibold text-gray-900">$249.99</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Paid
                                            </span>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                Shipped
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                                            View Details
                                        </button>
                                    </div>
                                </div>

                                <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                        <div className="mb-2 sm:mb-0">
                                            <p className="text-sm text-gray-500">Order ID</p>
                                            <p className="font-semibold text-gray-900">#MF2024-1233</p>
                                        </div>
                                        <div className="mb-2 sm:mb-0">
                                            <p className="text-sm text-gray-500">Date</p>
                                            <p className="font-medium text-gray-900">Dec 10, 2024</p>
                                        </div>
                                        <div className="mb-2 sm:mb-0">
                                            <p className="text-sm text-gray-500">Total</p>
                                            <p className="font-semibold text-gray-900">$389.50</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Paid
                                            </span>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                                Processing
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                                            View Details
                                        </button>
                                        <button className="bg-white hover:bg-red-50 text-red-600 border border-red-600 text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                                            Cancel Order
                                        </button>
                                    </div>
                                </div>

                                <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                        <div className="mb-2 sm:mb-0">
                                            <p className="text-sm text-gray-500">Order ID</p>
                                            <p className="font-semibold text-gray-900">#MF2024-1232</p>
                                        </div>
                                        <div className="mb-2 sm:mb-0">
                                            <p className="text-sm text-gray-500">Date</p>
                                            <p className="font-medium text-gray-900">Nov 28, 2024</p>
                                        </div>
                                        <div className="mb-2 sm:mb-0">
                                            <p className="text-sm text-gray-500">Total</p>
                                            <p className="font-semibold text-gray-900">$159.99</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Paid
                                            </span>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                Delivered
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Order Details</h2>
                        <button className="text-gray-500 hover:text-gray-900 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gray-50 rounded-xl p-4">
                            <p className="text-sm text-gray-500 mb-1">Order ID</p>
                            <p className="font-semibold text-gray-900">#MF2024-1234</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4">
                            <p className="text-sm text-gray-500 mb-1">Order Date</p>
                            <p className="font-medium text-gray-900">December 15, 2024</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4">
                            <p className="text-sm text-gray-500 mb-1">Status</p>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                Shipped
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        <div className="border border-gray-200 rounded-xl p-4">
                            <h3 className="font-semibold text-gray-900 mb-3">Shipping Address</h3>
                            <p className="text-gray-600 text-sm">Sarah Chen</p>
                            <p className="text-gray-600 text-sm">123 Fashion Avenue, Apt 4B</p>
                            <p className="text-gray-600 text-sm">New York, NY 10001</p>
                            <p className="text-gray-600 text-sm">United States</p>
                        </div>
                        <div className="border border-gray-200 rounded-xl p-4">
                            <h3 className="font-semibold text-gray-900 mb-3">Payment Method</h3>
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-900 font-medium">Visa ending in 4242</p>
                                    <p className="text-gray-500 text-sm">Expires 12/25</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                        <h3 className="font-semibold text-gray-900 mb-4">Order Items</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4 pb-4 border-b border-gray-100">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
                                <div className="flex-grow">
                                    <h4 className="font-semibold text-gray-900 mb-1">Premium Silk Dress</h4>
                                    <p className="text-sm text-gray-600 mb-1">Size: M | Color: Midnight Blue</p>
                                    <p className="text-sm text-gray-500">Qty: 1</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-gray-900">$159.99</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 pb-4 border-b border-gray-100">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
                                <div className="flex-grow">
                                    <h4 className="font-semibold text-gray-900 mb-1">Leather Handbag</h4>
                                    <p className="text-sm text-gray-600 mb-1">Color: Cognac Brown</p>
                                    <p className="text-sm text-gray-500">Qty: 1</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-gray-900">$89.99</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 space-y-2">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>$249.98</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span>$9.99</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Tax</span>
                                <span>$20.00</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t border-gray-200">
                                <span>Total</span>
                                <span>$279.97</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 mb-12">
                    <div className="max-w-md mx-auto text-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Cancel Order</h3>
                        <p className="text-gray-600 mb-6">Are you sure you want to cancel this order? This action cannot be undone.</p>

                        <div className="mb-6">
                            <label htmlFor="cancel-reason" className="block text-left text-sm font-medium text-gray-700 mb-2">
                                Reason for cancellation
                            </label>
                            <select
                                id="cancel-reason"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                <option>Select a reason</option>
                                <option>Changed my mind</option>
                                <option>Found a better price</option>
                                <option>Ordered by mistake</option>
                                <option>Delivery time too long</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button className="flex-1 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-medium py-3 px-6 rounded-xl transition-colors">
                                Keep Order
                            </button>
                            <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-xl transition-colors">
                                Yes, Cancel Order
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-12">
                    <div className="max-w-md mx-auto text-center">
                        <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No Orders Yet</h3>
                        <p className="text-gray-600 mb-6">You haven't placed any orders yet. Start exploring our collection!</p>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-xl transition-colors">
                            Start Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
