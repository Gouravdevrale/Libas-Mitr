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
import CartBtn from "./components/CartBtn"
import Profile from "./pages/Profile"
import PrivateComponent from "./components/PrivateComponent"
import NotFound from "./pages/PageNotFound"


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/collections" element={<AllProducts />} />

        <Route path="/collections/:pid" element={<ProductPage />} />

        <Route path="/auth" element={<PrivateComponent />}>
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
        </Route>

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
      <CartBtn />
      <Footer />
    </Router>
  )
}

export default App
