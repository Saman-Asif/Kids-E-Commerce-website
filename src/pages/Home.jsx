import { ArrowRight } from 'lucide-react'
import React from 'react'
import Home2 from '../components/Home2'
import Home3 from '../components/Home3'
import About from '../components/About'
import Home4 from '../components/Home4'
import Contact from '../components/Contact'
import { Link } from "react-router-dom";
import { motion } from "motion/react"
const Home = () => {
    return (
        <>
            <div className='md:p-8 p-4 w-full h-full bg-white border-b border-gray-100 py-16 md:py-26 px-6 md:px-16 lg:px-20'>
                    <div className='flex flex-col lg:flex-row justify-between gap-6 w-full'>
                        <div viewport={{once: true}}  className='lg:w-1/2 w-full'>
                            <motion.span initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.2}} viewport={{once: true}} className='bg-[#e9cbc5] p-1 px-4 rounded-full text-[#643e26]'>Ocean Wonders Kit</motion.span>
                            <motion.h1  initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.3}} viewport={{once: true}} className='text-[#643e26] fredoka font-extrabold mt-6 text-4xl md:text-4xl lg:text-5xl'>Artistic Magic at Their <span className='italic text-[#5C1C0A]'>Fingertips</span></motion.h1>
                            <motion.p  initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.4}} viewport={{once: true}}  className='text-[#696462] text-xl tracking-tight mt-6 max-w-md'>Nuturing Professional creativity through playful fabric painting. Transfrom everday moments into wearable, washable masterpieces.</motion.p>
                          <Link to='/shop'><motion.button initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.5}} viewport={{once: true}} className='bg-[#d2775c] mt-6 rounded-full text-white flex gap-2 items-center justify-center py-3 px-10 cursor-pointer'>
                                Shop New Arrivals<ArrowRight size={20} />
                            </motion.button></Link>  
                        </div>
                        <motion.div initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.6}} viewport={{once: true}} className='lg:w-1/2 w-full mt-10 lg:mt-0 relative'>
                            <img className='object-cover rounded-4xl relative w-full lg:h-99 h-auto' src="https://media.istockphoto.com/id/2252179634/photo/young-girl-paints-on-easel-in-bright-indoor-space-while-concentrating-on-her-artwork-during.jpg?s=612x612&w=0&k=20&c=5vQ_eeJ-TCkdo_F3brwMxoizkH4Mh_7hB52ydVU6XkY=" alt="" />
                            <div className='absolute hidden text-black lg:transform lg:-rotate-4 text-sm md:-bottom-4 bottom-4 left-4 md:flex flex-col md:-left-4 bg-white rounded-2xl py-3 px-4'>
                                <span className='text-[#ee6f55] font-semibold'>Eco Friendly</span>
                                Non toxic Kid safe<br/> pigments.
                            </div>
                        </motion.div>
                    </div>
                </div>
                <Home2/>
                <Home3/>
                <About/>
                <Home4/>
                <Contact/>
        </>
    )
}

export default Home
