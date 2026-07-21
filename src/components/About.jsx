import { ChartNoAxesGantt, HeartHandshake } from 'lucide-react'
import React from 'react'
import About2 from './About2'
import HomeServices from './HomeServices'

const About = () => {
  return (
    <>
      <div id='aboutus' className='md:p-8 p-4 w-full h-full bg-[#e9ddda] py-16 md:py-18 px-6 md:px-16 lg:px-20'>
       <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[#643e26] text-center fredoka font-extrabold mt-6 text-3xl md:text-4xl lg:text-4xl'>Our Mission</h1>
        <p className='text-[#46413f] text-2xl tracking-tight mt-2 max-w-2xl italic text-center'>
"To curate a world where play is intentional, materials are natural, and every spirit is nurtured with the warmth of high-quality craftsmanship."</p>
<HeartHandshake className='mt-6 text-[#643e26]'/>
        </div> 
        </div>
        <About2/>
    </>
  )
}

export default About
