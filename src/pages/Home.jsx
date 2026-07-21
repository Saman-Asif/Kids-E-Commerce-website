import { ArrowRight } from 'lucide-react'
import React from 'react'
import Home2 from '../components/Home2'
import Home3 from '../components/Home3'
import About from '../components/About'
import Home4 from '../components/Home4'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <div className='md:p-8 p-4 w-full h-full bg-[#f3eae8] py-16 md:py-26 px-6 md:px-16 lg:px-20'>
                    <div className='flex flex-col lg:flex-row justify-between gap-6 w-full'>
                        <div className='lg:w-1/2 w-full'>
                            <span className='bg-[#e9cbc5] p-1 px-4 rounded-full text-[#643e26]'>Ocean Wonders Kit</span>
                            <h1 className='text-[#643e26] fredoka font-extrabold mt-6 text-4xl md:text-4xl lg:text-5xl'>Artistic Magic at Their <span className='italic text-[#5C1C0A]'>Fingertips</span></h1>
                            <p className='text-[#696462] text-xl tracking-tight mt-6 max-w-md'>Nuturing Professional creativity through playful fabric painting. Transfrom everday moments into wearable, washable masterpieces.</p>
                            <button className='bg-[#d2775c] mt-6 rounded-full text-white flex gap-2 items-center justify-center py-3 px-10'>
                                Shop New Arrivals<ArrowRight size={20} />
                            </button>
                        </div>
                        <div className='lg:w-1/2 w-full mt-10 lg:mt-0 relative'>
                            <img className='object-cover rounded-4xl relative w-full lg:h-99 h-auto' src="https://images.unsplash.com/photo-1561898431-a2988eb64ecb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpZHMlMjBkb2luZyUyMGZhYnJpYyUyMHBhaW50aW5ncyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            <div className='absolute text-black lg:transform lg:-rotate-8 text-sm -bottom-4 flex flex-col -left-4 bg-white rounded-2xl py-3 px-4'>
                                <span className='text-[#ee6f55] font-semibold'>Eco Friendly</span>
                                Non toxic Kid safe<br/> pigments.
                            </div>
                        </div>
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
