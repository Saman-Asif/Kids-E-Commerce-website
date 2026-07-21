import { Mail, MapPin } from 'lucide-react'
import React from 'react'

const Contact = () => {
    return (
        <>
            <div id='contactus' className='md:p-8 p-4 w-full h-full bg-[#fdf7f6] py-16 md:py-26 px-6 md:px-16 lg:px-20'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-[#643e26] text-center fredoka font-extrabold mt-6 text-4xl md:text-4xl lg:text-4xl'>Questions? Let's Chat.</h1>
                    <p className='text-[#696462] text-center text-lg tracking-tight mt-2 max-w-2xl'>Our team of educators and artists are here to help you choose the perfect kit for your little one's creative journey.</p>
                    <div className='flex w-full flex-col lg:flex-row justify-between gap-6 mt-12'>
                        <div className='lg:w-1/2 w-full space-y-8'>
                        <div className='flex gap-4'>
                           <div className='text-[#643e26] shrink-0 bg-[#eed6d0] w-12 h-12 rounded-xl flex items-center justify-center'><Mail /></div> 
                            <div>
                                <span className='text-[#27201e]'>Email Us</span>
                                <p className=' text-xl lg:text-2xl text-[#643e26]'>hello@kindredspirits.com</p>
                            </div>
                            </div>
                              <div className='flex gap-4'>
                           <div className='text-[#643e26] shrink-0 bg-[#eed6d0] w-12 h-12 rounded-xl flex items-center justify-center'><MapPin/></div> 
                            <div>
                                <span className='text-[#27201e]'>Visit Our Studio</span>
                                <p className='text-xl lg:text-2xl text-[#643e26]'>Artist Lane, Melbourne</p>
                            </div>
                            </div>
                        </div>
                    <div className='w-full lg:w-1/2 h-full'>
                        <div className='rounded-4xl w-full h-full bg-[#eed6d0] text-[#f6edde] flex flex-col gap-2 p-4 lg:p-8 border-white/40 space-y-6 '>
                        <div className='flex justify-between items-center'>
                                <div>
                                    <label className="block text-sm font-medium text-[#643e26] mt-4 mb-1">Name</label>
                                    <input
                                        type="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 text-sm border text-[#27201e] border-[#ccc9c8] rounded-2xl bg-[#fdf7f6] focus:border-[#e6c7bf] focus:border-4 outline-none transition-all"
                                        placeholder="Your Name..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#643e26] mb-1 mt-4">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 text-sm border text-[#27201e] border-[#ccc9c8] rounded-2xl bg-[#fdf7f6] focus:border-[#e6c7bf] focus:border-4 outline-none transition-all"
                                        placeholder="Your Email..."
                                    />
                                </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#643e26] mb-1">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="5"
                                        className="w-full text-sm px-4 py-3 text-[#27201e] border-[#ccc9c8] rounded-2xl focus:border-[#e6c7bf] focus:border-4  outline-none transition-all bg-[#fdf7f6] resize-none border"
                                        placeholder="How can we Help?"
                                    ></textarea>
                                </div>
                                    <button className='text-white text-md bg-[#5A1B08] gap-2 w-full flex items-center justify-center py-3 rounded-full'>
                                        Submit
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
                 </div>
        </>
    )
}

export default Contact
