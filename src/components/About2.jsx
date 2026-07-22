import React from 'react'
import {Eye, Leaf , ShieldCheck } from 'lucide-react'
import { motion } from "motion/react"

const About2 = () => {
     const data = [
        {
            icon: <Leaf/>,
            h1:'Sustainability',
            p:'We source FSC-certified woods and organic cottons, ensuring our footprint on the planet is as soft es a lullaby'
        },
        {
            icon:<ShieldCheck />,
            h1:'Uncompromising Safety',
            p:'Every say is finished with fond-grade ails and non-toxic dyes, making them safe for curious hands and wandering mouths.'
        },
        {
            icon:<Eye />,
            h1:'Pure Joy',
            p:"We prioritize open-ended play. No batteries, no screen just the boundless energy of a child's imagination."
        }
    ]
  return (
    <>
        <div id='services' className='md:p-8 p-4 border-b border-gray-100 w-full h-full bg-white py-16 md:py-26 px-6 md:px-16 lg:px-20'>
       <div className='flex flex-col items-center justify-center'>
        <motion.h1  initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}} viewport={{once: true}}  className='text-[#643e26] text-center fredoka font-extrabold mt-6 text-4xl md:text-4xl lg:text-4xl'>Guided By Heart</motion.h1>
        <motion.p  initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.2}} viewport={{once: true}} className='text-[#696462] text-center text-lg tracking-tight mt-2 max-w-2xl'>The Principles behind every Kindred Spirits creation</motion.p>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-12'>
              {data.map((item, index)=>(
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.4, delay: index * 0.1}}  key={index} className='border transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-102 hover:shadow-2xl bg-[#f8f4f3] border-[#e9ddda] rounded-2xl p-6 flex flex-col gap-4'> 
               <div className='text-[#643e26] shrink-0 bg-[#eed6d0] w-12 h-12 rounded-xl flex items-center justify-center'>{item.icon}</div>
              <h1 className='text-[#643e26] text-lg font-semibold mt-2'>{item.h1}</h1>
              <p className='text-sm text-[#643e26] font-light leading-relaxed'>{item.p}</p>
              </motion.div>
           ))}
            </div>
        </div>
        </div>
    </>
  )
}

export default About2
