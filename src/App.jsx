import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import { Routes, Route} from "react-router-dom";
import Shop from './pages/Shop'
import About from './components/About'
import About2 from './components/About2'
import Footer from './components/Footer'
import ComponentContact from './components/Contact';
const App = () => {
  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contactus" element={<Contact/>} />
        <Route path="/contact" element={<ComponentContact/>} />
  <Route path="/aboutus" element={<About/>} />
  <Route path="/services" element={<About2/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
