import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { ToastContainer } from "react-toastify"

// Pages
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AllProducts from "./pages/AllProducts"
import Cart from "./pages/Cart"
import ProductPage from "./pages/ProductPage"
import Dashboard from "./pages/Dashboard"
import Users from "./pages/Users"
import Products from "./pages/Products"
import Reviews from "./pages/Reviews"
import Orders from "./pages/Orders"
import Coupons from "./pages/Coupons"


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/collections" element={<AllProducts />} />
        <Route path="/collections/:pid" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/reviews" element={<Reviews />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/coupons" element={<Coupons />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  )
}

export default App
