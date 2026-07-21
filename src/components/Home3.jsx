import { Leaf } from 'lucide-react'
import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "motion/react"

const Home3 = () => {
  return (
    <>
       <div className='md:p-8 p-4 w-full h-full bg-[#f3eae8] py-16 md:py-26 px-6 md:px-16 lg:px-20'>
       <div className='flex flex-col items-center justify-center'>
        <motion.h1  initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}} viewport={{once: true}}  className='text-[#643e26] text-center fredoka font-extrabold mt-6 text-4xl md:text-4xl lg:text-4xl'>Our Nurturingly Energetic Craft</motion.h1>
        <motion.p  initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.2}} viewport={{once: true}} className='text-[#696462] text-center text-lg tracking-tight mt-2 max-w-2xl'>We bridge the gap between "Playfull mess" and "Professional Art" providing kids with the tools to create something they are truly proud of.</motion.p>
        <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} viewport={{once: true}} transition={{duration:0.8}} className='flex w-full flex-col gap-6 lg:flex-row justify-between mt-12'>
            <motion.div initial={{opacity:0, x: -30}} whileInView={{opacity:1, x:0}} viewport={{once: true}} transition={{duration:0.8, delay: 0.2}} className='w-full h-full lg:w-[70%] bg-[#e6d4cf] rounded-4xl px-8 py-20 '>
           <h1 className='text-[#643e26] fredoka font-extrabold mt-6 text-4xl md:text-4xl lg:text-4xl'>The Professional Touch</h1>
           <p className='text-[#696462] text-lg tracking-tight mt-2 max-w-2xl'>Unlike standard crafts, our kits use artist-grade, permanent fabric pigments that remain soft to the touch and vibrant through 100+ washes. We believe children's art deserves to last a lifetime.</p>
           <div className='flex gap-6 mt-16'>
            <p className='text-[#643e26] flex flex-col gochi-hand-regular'><span className='text-3xl font-extrabold coiny-regular '>100%</span>Kids Safe Tested</p>
             <p className='text-[#643e26] flex flex-col gochi-hand-regular'><span className='text-3xl font-extrabold coiny-regular '>Art</span>Grade Pigments</p>
           </div>
            </motion.div>
            <div className='w-full flex flex-col gap-6 lg:w-[30%]'>
                <div className='w-full'>
                  <img className='rounded-4xl' src="https://plus.unsplash.com/premium_photo-1677130268934-a31da9548023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhYnJpYyUyMHBhaW50aW5nJTIwdGhpbmdzfGVufDB8fDB8fHww" alt="" />
                </div>
                <div className='w-full h-full'>
                    <div className='rounded-4xl w-full h-full bg-[#643e26] text-[#f6edde] flex flex-col gap-2 justify-center items-center p-6 '>
                          <Leaf/>
                          <h1 className='text-center font-extrabold text-lg'>Consciously Made</h1>
                          <p className='text-center text-sm'>Sustainable cotton and Recycled packaging</p>
                    </div>
                </div>
            </div>
        </motion.div>
        <motion.div initial={{opacity:0, x: 30}} whileInView={{opacity:1, x:0}} viewport={{once: true}} transition={{duration:0.6, delay: 0.3}} className='rounded-4xl w-full mt-8 p-8 lg:h-[250px] bg-[#e0d7d6] flex flex-col lg:flex-row justify-between items-center text-[#643e26]'>
          <div>
            <h1 className='text-2xl md:text-3xl font-semibold text-center'>Join our Creative Community</h1>
            <p className='text-center mt-2'>Weekly painting tutorials and inspiration sent to your inbox.</p>
          </div>
         <Link to='/signin'> <button className='bg-[#643e26] text-[#f6edde] rounded-full py-4 text-sm px-8 mt-4 lg:mt-0'>
            Sign Up Now
          </button></Link>
        </motion.div>
        </div>
        </div>
    </>
  )
}

export default Home3
