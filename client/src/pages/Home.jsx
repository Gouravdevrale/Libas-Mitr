import { Upload, Shirt, Eye, ShoppingBag, Sparkles, Target, Clock } from 'lucide-react';
import FeaturedCategory from '../components/FeaturedCategory';
import Hero from "../assets/hero.png"

function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Try Before You Buy — <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Virtually</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Experience the future of online shopping with AI-powered virtual try-on technology. See how clothes fit your body before making a purchase.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                                Start Try-On
                            </button>
                            <button className="bg-white text-gray-900 border-2 border-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                                Browse Collection
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div
                            className="aspect-square bg-cover bg-center rounded-3xl flex items-center justify-center relative overflow-hidden"
                            style={{
                                backgroundImage: `url(${Hero})`
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-transparent opacity-40"></div>
                            <div className="relative text-center p-8 z-10">
                                <Sparkles className="w-24 h-24 text-white mx-auto mb-4" />
                                <p className="text-white text-lg font-semibold">AI-Powered Fashion Preview</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full blur-3xl opacity-30"></div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                        <p className="text-xl text-gray-600">Three simple steps to your perfect fit</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Upload className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Upload Your Photo</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Take a quick photo or upload an existing one. Our AI will analyze your body measurements.
                            </p>
                        </div>
                        <div className="text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Shirt className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Choose Your Outfit</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Browse our curated collection and select any item you want to try on virtually.
                            </p>
                        </div>
                        <div className="text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Eye className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Preview Your Fit</h3>
                            <p className="text-gray-600 leading-relaxed">
                                See an accurate representation of how the outfit looks on you in real-time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <FeaturedCategory />

            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Meta Fashion</h2>
                        <p className="text-xl text-gray-600">The smartest way to shop online</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                                <Target className="w-6 h-6 text-violet-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Fit Accuracy</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our advanced AI algorithms ensure 95% accuracy in size predictions and fit visualization.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                                <Sparkles className="w-6 h-6 text-violet-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">No Size Guessing</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Say goodbye to size charts and confusion. See exactly how clothes fit your unique body.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                                <Clock className="w-6 h-6 text-violet-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Save Time & Returns</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Reduce returns by 80% and shop with confidence knowing your order will fit perfectly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600"></div>
                <div className="absolute inset-0 bg-gray-900 opacity-10"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Fashion that fits your digital twin
                    </h2>
                    <p className="text-xl text-violet-100 mb-8">
                        Join thousands of shoppers who have already discovered the future of fashion
                    </p>
                    <button className="bg-white text-violet-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                        Create Free Account
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;
