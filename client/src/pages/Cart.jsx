function Cart() {
    return (
        <div className="min-h-screen bg-stone-50">


            <div className="max-w-7xl mx-auto px-4 py-6">
                <nav className="text-sm text-gray-600 mb-6">
                    <span>Home</span> <span className="mx-2">/</span>
                    <span className="text-neutral-900 font-medium">Shopping Cart</span>
                </nav>

                <h2 className="text-4xl font-bold text-neutral-900 mb-8">Your Cart</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="space-y-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="bg-white rounded-3xl shadow-md p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <div className="w-full sm:w-32 h-40 bg-gray-200 rounded-2xl flex-shrink-0"></div>

                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <h3 className="text-lg font-bold text-neutral-900 mb-1">Elegant Summer Dress</h3>
                                                    <p className="text-sm text-gray-600">Dresses</p>
                                                </div>
                                                <button className="text-gray-400 hover:text-red-500 transition-colors">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="flex items-center gap-4 mb-4">
                                                <div>
                                                    <p className="text-xs text-gray-500 mb-1">Size</p>
                                                    <p className="text-sm font-semibold text-neutral-900">L</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500 mb-1">Color</p>
                                                    <div className="w-6 h-6 bg-black rounded-full border-2 border-gray-300"></div>
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center border-2 border-gray-300 rounded-xl overflow-hidden">
                                                    <button className="px-4 py-2 hover:bg-gray-100 transition-colors">
                                                        <span className="text-lg font-semibold">−</span>
                                                    </button>
                                                    <span className="px-4 py-2 font-semibold text-neutral-900 border-x-2 border-gray-300">1</span>
                                                    <button className="px-4 py-2 hover:bg-gray-100 transition-colors">
                                                        <span className="text-lg font-semibold">+</span>
                                                    </button>
                                                </div>
                                                <p className="text-2xl font-bold text-neutral-900">$89.99</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="mt-6 text-violet-600 font-semibold hover:text-violet-700 transition-colors flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Continue Shopping
                        </button>
                    </div>

                    <div>
                        <div className="bg-white rounded-3xl shadow-md p-6 sticky top-6">
                            <h3 className="text-xl font-bold text-neutral-900 mb-6">Order Summary</h3>

                            <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Subtotal</span>
                                    <span className="font-semibold text-neutral-900">$269.97</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Shipping</span>
                                    <span className="font-semibold text-neutral-900">$9.99</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Tax</span>
                                    <span className="font-semibold text-neutral-900">$22.40</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="coupon" className="block text-sm font-semibold text-neutral-900 mb-2">
                                    Have a coupon?
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        id="coupon"
                                        placeholder="Enter coupon code"
                                        className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                                    />
                                    <button className="px-6 py-3 bg-violet-600 text-white rounded-xl font-semibold hover:bg-violet-700 transition-colors">
                                        Apply
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Try: META10</p>
                            </div>

                            <div className="flex justify-between mb-6 pt-6 border-t border-gray-200">
                                <span className="text-lg font-bold text-neutral-900">Total</span>
                                <span className="text-2xl font-bold text-neutral-900">$302.36</span>
                            </div>

                            <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:from-violet-700 hover:to-purple-700 transition-all shadow-lg mb-3">
                                Proceed to Checkout
                            </button>

                            <div className="bg-violet-50 rounded-2xl p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <span className="text-sm font-semibold text-neutral-900">Secure Checkout</span>
                                </div>
                                <p className="text-xs text-gray-600">Your payment information is encrypted and secure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;