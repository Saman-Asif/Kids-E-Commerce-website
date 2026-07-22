import React, { useState } from 'react'
import { ArrowRight, Menu, ShoppingCart, Sun, User, X } from 'lucide-react'
import { Link } from "react-router-dom";
import { motion } from "motion/react"

const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false)

  return (
    <>
        <motion.div initial={{opacity:0, y: -50}} animate={{opacity:1, y:0}} transition={{duration:0.6, ease:'easeOut'}} className='py-6 px-4 sm:px-12 lg:px-24 xl:px-20 flex justify-between items-center sticky shadow-md font-medium top-0 text-[#643e26] z-20 backdrop-blur-sm w-full bg-white h-20'>
          <h1 className='text-3xl coiny-regular'>Kindered Spirits</h1>
    <ul className={`flex items-center gap-6 text-gray-600 ${!isOpen ? 'max-lg:w-0 overflow-hidden' : 'max-lg:w-70'} max-lg:fixed fredoka top-0 bottom-0 right-0 max-lg:min-h-screen max-lg:h-full text-xl max-lg:flex-col  max-lg:bg-white max-lg:text-[#643e26] max-lg:pt-20 lg:items-center transition-all`}>
        <X onClick={()=>setIsOpen(false)} className='w-5 absolute right-4 top-4 lg:hidden text-[#643e26]'/>
        <Link onClick={()=>setIsOpen(false)} to='/' className='sm:hover:border-b hover:text-[#643e26]'>Home</Link>
        <Link onClick={()=>setIsOpen(false)} to='/shop' className='sm:hover:border-b hover:text-[#643e26]'>Shop</Link>
        <Link to='/services' onClick={()=>setIsOpen(false)} className='sm:hover:border-b hover:text-[#643e26]'>Services</Link>
        <Link to='/contact' onClick={()=>setIsOpen(false)} className='sm:hover:border-b hover:text-[#643e26]'>Contact Us</Link>
        {/* Icons shown ONLY inside the mobile sidebar when opened */}
                <div className="flex items-center gap-6 mt-6 lg:hidden">
                    <Link to='/contactus' onClick={()=>setIsOpen(false)} className="hover:scale-105 transition-all">
                        <User className="w-6 h-6 text-[#643e26]" />
                    </Link>
                    <Link to='/cart' onClick={()=>setIsOpen(false)} className="hover:scale-105 transition-all">
                        <ShoppingCart className="w-6 h-6 text-[#643e26]" />
                    </Link>
                </div>
    </ul>
    <ul className='flex items-center gap-6'>
        <Menu onClick={()=>setIsOpen(true)} className='w-4 lg:hidden text-[#643e26]'/>
       <Link to='/contactus' className=' max-lg:hidden text-[#643e26] cursor-pointer hover:scale-103 transition-all'><button className='flex items-center gap-2 justify-center'><User/></button></Link>
       <Link to='/cart' className=' max-lg:hidden text-[#643e26] cursor-pointer hover:scale-103 transition-all'><ShoppingCart/></Link>
    </ul>
      </motion.div> 
    </>
  )
}

export default Navbar
