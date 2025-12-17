import { ShoppingBag } from 'lucide-react'
import Men from "../assets/men_clothing.jpg"
import Woman from "../assets/woman_clothing.jpg"
import Hoodie from "../assets/hoodie.jpg"
import SuperHero from "../assets/superhero.jpg"

const FeaturedCategory = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Categories</h2>
                <p className="text-xl text-gray-600">Discover styles that match your vibe</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div
                        className="aspect-[3/4] bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage: `url(${Men})`
                        }}
                    >
                        <div className="absolute inset-0 bg-opacity-20"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                        <h3 className="text-2xl font-bold text-white">Men</h3>
                    </div>
                </div>
                <div className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div
                        className="aspect-[3/4] bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage: `url(${Woman})`
                        }}
                    >
                        <div className="absolute inset-0 bg-opacity-20"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                        <h3 className="text-2xl font-bold text-white">Women</h3>
                    </div>
                </div>
                <div className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div
                        className="aspect-[3/4] bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage: `url(${Hoodie})`
                        }}
                    >
                        <div className="absolute inset-0 bg-opacity-20"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                        <h3 className="text-2xl font-bold text-white">Hoodies</h3>
                    </div>
                </div>
                <div className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div
                        className="aspect-[3/4] bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage: `url(${SuperHero})`
                        }}
                    >
                        <div className="absolute inset-0 bg-opacity-20"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                        <h3 className="text-2xl font-bold text-white">SuperHero</h3>
                    </div>
                </div>



            </div>
        </section>

    )
}

export default FeaturedCategory
