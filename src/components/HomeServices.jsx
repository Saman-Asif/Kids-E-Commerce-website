import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "motion/react"

const HomeServices = () => {
  return (
    <>
       <div className='md:p-8 p-4 w-full h-full bg-[#f3eae8] py-16 md:py-26 px-6 md:px-16 lg:px-20'>
                    <div className='flex flex-col lg:flex-row justify-between gap-6 w-full'>
                        <div className='lg:w-1/2 w-full'>
                            <motion.span initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.2}} viewport={{once: true}}  className='bg-[#e9cbc5] p-1 px-4 rounded-full text-[#643e26]'>Our Story</motion.span>
                            <motion.h1  initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.3}} viewport={{once: true}}  className='text-[#643e26] fredoka font-extrabold mt-6 text-4xl md:text-4xl lg:text-5xl'>Nurturing the Magic of Childhood</motion.h1>
                            <motion.p  initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.4}} viewport={{once: true}}  className='text-[#696462] text-md tracking-tight mt-6 max-w-lg'>At Kindred Spirits, we believe childhood isn't just a phase-it's a foundation of wonder. Founded in a small workshop with a single block of cedar, our journey began with a simple mission to create toys that talk less and let children imagine more.</motion.p>
                            <Link to='/shop'><motion.button initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.5}} viewport={{once: true}} className='bg-[#5A1B08] mt-6 rounded-full text-white flex gap-2 items-center justify-center py-3 px-10'>
                                Explore Our Workshop
                            </motion.button></Link>
                        </div>
                        <motion.div initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.6}} viewport={{once: true}}  className='lg:w-1/2 w-full mt-10 lg:mt-0 relative'>
                            <img className='object-cover rounded-4xl relative w-full lg:h-99 h-auto' src="https://media.istockphoto.com/id/2282506249/photo/young-asian-daughter-paints-on-easel-beside-art-table-in-home-playroom-lifting-brush-for.jpg?s=612x612&w=0&k=20&c=TlIug1oVMnhEarrY6jTn9V3BriTv-fIQQm4uaTYcF4U=" alt="" />
                        </motion.div>
                    </div>
                </div>
    </>
  )
}

export default HomeServices
