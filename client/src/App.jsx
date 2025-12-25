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
import PrivateAdminComponent from "./components/PrivateAdminComponent"


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
        <Route path="/admin" element={<PrivateAdminComponent />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="orders" element={<Orders />} />
          <Route path="coupons" element={<Coupons />} />
        </Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  )
}

export default App
