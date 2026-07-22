import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "motion/react"

const Footer = () => {
  return (
    <>
       <div  className='bg-white p-4 border border-gray-100'>
    <motion.div initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }} className='h-auto mx-auto lg:gap-10 w-full grid md:grid-cols-[2fr_1fr_1fr_1fr] px-6 py-12 grid-col'>
        <div1 className='pt-6'>
      <h1 className='text-3xl coiny-regular text-[#643e26]'>Kindered Spirits</h1>
      <p className='text-[#643e26] opacity-80 max-w-sm text-sm mt-4 mb-4'>Crafting joyfull experiences for the next generation of creators.</p>
    </div1>
    <div2 className='pt-6 text-[#643e26]'>
        <p className='text-[#643e26] text-xs tracking-widest uppercase font-semibold'>Product</p>
        <ul className='space-y-3 mt-3'>
            <li>
                   <Link to='/' className="nav-link text-sm" >Home</Link>
            </li>
            <li>
                 <Link to='/shop' className="nav-link text-sm" >Products</Link>
            </li>
             <li>
                  <Link to='/services' className="nav-link text-sm" >Services</Link>
            </li>
            </ul>
    </div2>
    <div3 className='pt-6 text-[#643e26]'>
        <p className='text-[#643e26] font-semibold text-xs tracking-widest uppercase'>GET STARTED</p>
        <ul className='space-y-3 mt-3'>
            <li>
                  <Link to='/aboutus' className="nav-link text-sm" >About</Link>
            </li>
            <li>
                   <Link to='/contactus' className="nav-link text-sm" >Contact</Link>
            </li>
             <li>
                  <Link href='/' className="nav-link text-sm" >Kindred Spirits</Link>
            </li>
            </ul>
    </div3>
    <div4 className='pt-6 space-y-3 text-[#643e26]'>
        <p className='text-[#643e26] text-xs tracking-widest uppercase font-semibold'>LEGAL</p>
       <ul className='space-y-3 mt-3'>
            <li>
                  <Link to='/cart' className="nav-link text-sm" >Cart</Link>
            </li>
            <li>
                  <Link to='/signin' className="nav-link text-sm" >Sign In</Link>
            </li>
            </ul>
    </div4>
    </motion.div>
    <div className='border-t border-white/10 w-full lg:flex lg:justify-between pt-4'>
    <p className='text-[#643e26] opacity-80 text-fg font-serif'>© 2026 Kindred Spirits</p>
    <p className='text-[#643e26] opacity-80 text-sm flex gap-2 items-center justify-center'>Nurturing Energies</p>
    </div>
    </div>
    </>
  )
}

export default Footer
