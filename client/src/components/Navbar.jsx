import { Sparkles } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../features/auth/authSlice'

const Navbar = () => {

    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate("/")
        dispatch(logoutUser())
    }

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to={"/"}>
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-6 h-6 text-violet-600" />
                            <span className="text-xl font-bold text-gray-900">Meta Fashion</span>
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-gray-900 hover:text-violet-600 transition-colors duration-300 font-medium">Home</Link>
                        <Link to="/collections" className="text-gray-700 hover:text-violet-600 transition-colors duration-300">Collections</Link>
                        <Link to="/about" className="text-gray-700 hover:text-violet-600 transition-colors duration-300">About</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-violet-600 transition-colors duration-300">Contact</Link>
                    </div>
                    {
                        user ? (<>
                            <div className='flex items-center justify-center space-x-5'>
                                <h1>Welcome {user?.name}</h1>
                                <button onClick={handleLogout} className="bg-gradient-to-r from-red-600 to-red-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transition-all duration-300 cursor-pointer">Logout</button>
                            </div>
                        </>) : (<Link to={"/login"} className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                            Login
                        </Link>)
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
