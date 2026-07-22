import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import { Routes, Route } from "react-router-dom";
import Shop from './pages/Shop'
import Footer from './components/Footer'
import ComponentContact from './components/Contact';
import Checkout from './pages/Checkout'
import SignIn from './pages/SignIn'
import Services from './pages/Services'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/contact" element={<ComponentContact />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
