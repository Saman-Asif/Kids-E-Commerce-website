import { Shield, Trash } from 'lucide-react'
import QuantitySelector from '../components/QuantitySelector'
import { Link } from "react-router-dom";
import { motion } from "motion/react"

const Cart = () => {
    return (
        <>
            <div className='md:p-8 p-4 w-full h-full bg-white py-16 md:py-26 px-6 md:px-16 lg:px-20'>
                <div className='flex flex-col'>
                    <motion.h1  initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}} viewport={{once: true}} className='text-[#643e26] fredoka font-extrabold text-3xl md:text-4xl lg:text-4xl'>Your Treasures</motion.h1>
                    <motion.p  initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.2}} viewport={{once: true}} className='text-[#696462] text-lg tracking-tight mt-2 max-w-md'>Review your creative collection before we prepare them for your home.</motion.p>
                </div>
                <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} viewport={{once: true}} transition={{duration:0.8}}  className='w-full h-full flex flex-col gap-6 mt-12 lg:flex-row'>
                    <motion.div initial={{opacity:0, x: -30}} whileInView={{opacity:1, x:0}} viewport={{once: true}} transition={{duration:0.8, delay: 0.2}} className='w-full flex flex-col gap-4 lg:w-[70%]'>
                        <div className='w-full h-auto bg-[#faf9f8] rounded-3xl p-4 md:p-4 border flex flex-col md:flex-row gap-6 border-[#c4c2c0]'>
                            <img className='w-full md:w-[140px] h-[150px] object-cover rounded-2xl flex-shrink-0' src="https://media.istockphoto.com/id/2277074388/photo/group-of-diverse-children-learning-acrylic-pouring-art-in-classroom.jpg?s=612x612&w=0&k=20&c=a45fCV_dROPpHnD766aZ-T-oQsUzZ1buoS4yfY1IfVM=" alt="" />
                            {/* Right Side: Product Details & Controls */}
                            <div className='w-full flex flex-col justify-between'>
                                <div>
                                    <div className='flex items-center justify-between mt-4'>
                                        <h3 className='text-lg font-bold text-[#3B2219]'>Animal Safari Fabric Paint Kit</h3>
                                        <Trash className='cursor-pointer' />
                                    </div>
                                    <p className='text-sm text-gray-600 mt-1'>Includes 6 wash-safe colors, stencils, and brushes.</p>
                                </div>
                                <div className='flex items-center justify-between mt-4'>
                                    <QuantitySelector />
                                    <span className='font-bold text-[#3B2219]'>$34.00</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-auto bg-[#faf9f8] rounded-3xl p-4 md:p-4 border flex flex-col md:flex-row gap-6 border-[#c4c2c0]'>
                            <img className='w-full md:w-[140px] h-[150px] object-cover rounded-2xl flex-shrink-0' src="https://media.istockphoto.com/id/2277074388/photo/group-of-diverse-children-learning-acrylic-pouring-art-in-classroom.jpg?s=612x612&w=0&k=20&c=a45fCV_dROPpHnD766aZ-T-oQsUzZ1buoS4yfY1IfVM=" alt="" />
                            {/* Right Side: Product Details & Controls */}
                            <div className='w-full flex flex-col justify-between'>
                                <div>
                                    <div className='flex items-center justify-between mt-4'>
                                        <h3 className='text-lg font-bold text-[#3B2219]'>Custom Canvas Tote Set</h3>
                                        <Trash className='cursor-pointer' />
                                    </div>
                                    <p className='text-sm text-gray-600 mt-1'>Two 100% organic cotton totes ready for your art.</p>
                                </div>
                                <div className='flex items-center justify-between mt-4'>
                                    <QuantitySelector />
                                    <span className='font-bold text-[#3B2219]'>$34.00</span>
                                </div>
                            </div>
                        </div>
                        <motion.div initial={{opacity:0, x: 30}} whileInView={{opacity:1, x:0}} viewport={{once: true}} transition={{duration:0.6, delay: 0.3}} className='w-full h-auto bg-[#f0dad8] rounded-3xl p-4 md:p-4 flex flex-col md:flex-row lg:py-12 lg:px-6 justify-between border-dashed border-[#c4c2c0] border-2 mt-4'>
                            <div>
                                <h3 className='text-[#3B2219]'>Complete the Masterpiece?</h3>
                                <p className='text-[#3B2219]'>Add our "Vibrant Neon Acent Kit" for just $12</p>
                            </div>
                            <button className='bg-[#3B2219] text-white cursor-pointer py-1 px-8 rounded-full'>Add to Cart</button>
                        </motion.div>
                    </motion.div>
                    <div className='w-full lg:w-[30%]'>
                        <div className="bg-[#e9ddda] p-6 lg:p-10 rounded-3xl border border-[#EADBCE] shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-[#3B2219] mb-6">Order Summary</h3>

                                <div className="flex justify-between text-sm text-gray-700 mb-3">
                                    <span>Subtotal</span>
                                    <span>$72.00</span>
                                </div>

                                <div className="flex justify-between text-sm text-gray-700 mb-3">
                                    <span>Shipping</span>
                                    <span>$5.99</span>
                                </div>

                                <div className="flex justify-between text-sm text-gray-700 mb-3">
                                    <span>Tax (Estimated)</span>
                                    <span>$4.50</span>
                                </div>

                                <hr className="my-4 border-dashed border-[#b6b3b1]" />

                                <div className="flex justify-between font-bold text-base text-[#3B2219] mb-6">
                                    <span>Total</span>
                                    <span>$82.49</span>
                                </div>
                              
                                {/* Promo Code Input Box */}
                                <div className="flex gap-2 mb-6">
                                    <input
                                        type="text"
                                        placeholder="GIFT20"
                                        className="w-full px-3 py-2 text-sm bg-white border border-[#EADBCE] rounded-xl focus:outline-none focus:border-[#3B2219]"
                                    />
                                    <button className="px-4 py-2 bg-[#7E3D2F] text-white text-sm font-medium rounded-xl hover:bg-[#523328] transition cursor-pointer">
                                        Apply
                                    </button>
                                </div>
                            </div>

                            {/* Proceed Button */}
                           <Link to='/checkout'> <button className="w-full self-center py-3 bg-[#7E3D2F] hover:bg-[#683126] text-[#FBCCBC] rounded-xl transition shadow-sm cursor-pointer flex items-center justify-center gap-2 text-sm">
                                Proceed to Checkout →
                            </button></Link>
                            <p className='flex justify-center items-center gap-2 mt-4 text-xs text-[#3B2219]'><Shield size={16}/> Secure Checkout Guaranted</p>
                            <p className='flex justify-center items-center gap-2 text-xs text-[#3B2219]'>Nuturing your creativity with care.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Cart
