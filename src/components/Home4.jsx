import React from 'react'

const Home4 = () => {
  return (
    <>
       <div className=' w-full h-full bg-[#faeae7] lg:py-24 lg:px-34 p-4'>
       <div className='flex flex-col justify-center items-center md:p-8 p-4 py-16 md:py-18 px-6 md:px-16 lg:px-20 rounded-2xl bg-[#78311B]'>
            <h1 className='text-2xl text-white md:text-3xl font-semibold text-center'>Join The Spirit</h1>
            <p className='text-center mt-2 text-[#e0947d] max-w-2xl mt-8'>Subscribe to receive parenting tips, workshop updates and exclusive early access to our limited releases.</p>
            <div className='flex flex-col lg:flex-row gap-4 mt-12'>
                 <input
                type="email"
                name="email"
                required
                className="w-full bg-white px-6 py-3 text-sm border text-[#292421] rounded-full focus:border-[#C16C53] focus:border-2 outline-none transition-all"
                placeholder="Your Email Address..."
              />
              <button className='bg-[#5A1B08] self-center text-[#f6edde] w-fit rounded-full py-4 text-sm px-8 lg:mt-0'>
            Subscribe
          </button>
          </div>
        </div>
        </div>
    </>
  )
}

export default Home4
