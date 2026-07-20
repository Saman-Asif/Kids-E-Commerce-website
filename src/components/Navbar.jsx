import React, { useState } from 'react'
import { ArrowRight, Menu, Moon, Phone, ShoppingCart, Sun, User, X } from 'lucide-react'

import { motion } from "motion/react"

const Navbar = () => {
    const [isOpen , setIsOpen] = useState("false")

  return (
    <>
        <motion.div initial={{opacity:0, y: -50}} animate={{opacity:1, y:0}} transition={{duration:0.6, ease:'easeOut'}} className='py-6 px-4 sm:px-12 lg:px-24 xl:px-20 flex justify-between items-center sticky font-medium top-0 text-[#643e26] z-20 backdrop-blur-sm w-full bg-[#f0e5e2] h-20'>
          <h1 className='text-3xl coiny-regular'>Kindered Spirits</h1>
    <ul className={`flex items-center gap-6 text-gray-600 ${!isOpen ? 'max-lg:w-0 overflow-hidden' : 'max-lg:w-60 max-lg:pl-10'} max-lg:fixed fredoka top-0 bottom-0 right-0 max-lg:min-h-screen max-lg:h-full text-xl max-lg:flex-col  max-lg:bg-[#f0e5e2] max-lg:text-white max-lg:pt-20 lg:items-center transition-all`}>
        <X onClick={()=>setIsOpen(false)} className='w-5 absolute right-4 top-4 lg:hidden'/>
        <a onClick={()=>setIsOpen(false)} href='#' className='sm:hover:border-b hover:text-[#643e26]'>Home</a>
        <a onClick={()=>setIsOpen(false)} href='#services' className='sm:hover:border-b hover:text-[#643e26]'>Services</a>
        <a onClick={()=>setIsOpen(false)} href='#ourwork' className='sm:hover:border-b hover:text-[#643e26]'>Our Work</a>
        <a onClick={()=>setIsOpen(false)} href='#contactus' className='sm:hover:border-b hover:text-[#643e26]'>Contact Us</a>
    </ul>
    <ul className='flex items-center gap-6'>
        <Menu onClick={()=>setIsOpen(true)} className='w-4 lg:hidden '/>
       <a href='#contactus' className=' max-lg:hidden text-[#643e26] cursor-pointer hover:scale-103 transition-all'><button className='flex items-center gap-2 justify-center'><User/></button></a>
       <a href='#cart' className=' max-lg:hidden text-[#643e26] cursor-pointer hover:scale-103 transition-all'><ShoppingCart/></a>
    </ul>
      </motion.div> 
    </>
  )
}

export default Navbar
