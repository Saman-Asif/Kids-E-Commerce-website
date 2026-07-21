import React from 'react'
import { ArrowRight } from 'lucide-react'

const HomeServices = () => {
  return (
    <>
       <div className='md:p-8 p-4 w-full h-full bg-[#f3eae8] py-16 md:py-26 px-6 md:px-16 lg:px-20'>
                    <div className='flex flex-col lg:flex-row justify-between gap-6 w-full'>
                        <div className='lg:w-1/2 w-full'>
                            <span className='bg-[#e9cbc5] p-1 px-4 rounded-full text-[#643e26]'>Our Story</span>
                            <h1 className='text-[#643e26] fredoka font-extrabold mt-6 text-4xl md:text-4xl lg:text-5xl'>Nurturing the Magic of Childhood</h1>
                            <p className='text-[#696462] text-md tracking-tight mt-6 max-w-lg'>At Kindred Spirits, we believe childhood isn't just a phase-it's a foundation of wonder. Founded in a small workshop with a single block of cedar, our journey began with a simple mission to create toys that talk less and let children imagine more.</p>
                            <button className='bg-[#5A1B08] mt-6 rounded-full text-white flex gap-2 items-center justify-center py-3 px-10'>
                                Explore Our Workshop
                            </button>
                        </div>
                        <div className='lg:w-1/2 w-full mt-10 lg:mt-0 relative'>
                            <img className='object-cover rounded-4xl relative w-full lg:h-99 h-auto' src="https://images.unsplash.com/photo-1554728432-e8f16e88503e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhYnJpYyUyMHBhaW50aW5nJTIwY2hpbGRyZW58ZW58MHx8MHx8fDA%3D" alt="" />
                        </div>
                    </div>
                </div>
    </>
  )
}

export default HomeServices
