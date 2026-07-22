import { PhoneIcon, WalletCards } from 'lucide-react';
import React, { useState } from 'react'
import { motion } from "motion/react"

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [formData, setFormData] = useState({
        cardholderName: 'Sarah Jenkins',
        cardNumber: '0000 0000 0000 0000',
        expiryDate: '',
        cvv: '',
        saveInfo: false,
        promoCode: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };
    return (
        <>
            <div className='md:p-8 p-4 w-full h-full bg-white py-16 md:py-26 px-6 md:px-16 lg:px-20'>
                <div className='flex flex-col'>
                    <motion.h1  initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}} viewport={{once: true}} className='text-[#643e26] fredoka font-extrabold text-3xl md:text-4xl lg:text-4xl'>Payment Method</motion.h1>
                    <motion.p  initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.2}} viewport={{once: true}} className='text-[#696462] text-lg tracking-tight mt-2 max-w-md'>Choose how you'd like to pay for your handcrafted treasures.</motion.p>
                </div>
                {/* Main 12-Column Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">

                    {/* LEFT COLUMN (7 Cols): Payment Cards, Form Fields, and Action Buttons wrapped together */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                        <div className="space-y-6">

                            {/* Payment Type Selection Cards */}
                            <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} viewport={{once: true}} transition={{duration:0.8}}  className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                {/* Credit Card Option */}
                                <div
                                    onClick={() => setPaymentMethod('card')}
                                    className={`cursor-pointer rounded-2xl p-4 border transition flex flex-col justify-between relative bg-white ${paymentMethod === 'card' ? 'border-[#3B2219] ring-1 ring-[#3B2219]' : 'border-[#E8D9CD]'
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-xl"><WalletCards /></span>
                                        <input
                                            type="radio"
                                            name="paymentType"
                                            checked={paymentMethod === 'card'}
                                            onChange={() => setPaymentMethod('card')}
                                            className="accent-[#3B2219]"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-[#3B2219]">Credit / Debit Card</h4>
                                        <p className="text-xs text-gray-500 mt-0.5">Visa, Mastercard, AMEX</p>
                                    </div>
                                </div>

                                {/* JazzCash Option */}
                                <div
                                    onClick={() => setPaymentMethod('jazzcash')}
                                    className={`cursor-pointer rounded-2xl p-4 border transition flex flex-col justify-between relative bg-white ${paymentMethod === 'jazzcash' ? 'border-[#3B2219] ring-1 ring-[#3B2219]' : 'border-[#E8D9CD]'
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-xs font-bold px-2 py-0.5 bg-[#8C1D40] text-white rounded">JAZZCASH</span>
                                        <input
                                            type="radio"
                                            name="paymentType"
                                            checked={paymentMethod === 'jazzcash'}
                                            onChange={() => setPaymentMethod('jazzcash')}
                                            className="accent-[#3B2219]"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-[#3B2219]">JazzCash Wallet</h4>
                                        <p className="text-xs text-gray-500 mt-0.5">Mobile Wallet & Voucher</p>
                                    </div>
                                </div>

                            </motion.div>

                            {/* Form Input Fields Box */}
                            <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} viewport={{once: true}} transition={{duration:0.8, delay:0.3}}  className="bg-white p-6 rounded-3xl border border-[#E8D9CD] space-y-4">
                                {/* CONDITIONAL RENDERING BASED ON PAYMENT METHOD */}
                                {paymentMethod === 'card' ? (
                                    <>
                                        {/* Cardholder Name */}
                                        <div>
                                            <label className="block text-xs font-bold text-gray-600 mb-1">Cardholder Name</label>
                                            <input
                                                type="text"
                                                name="cardholderName"
                                                value={formData.cardholderName}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2.5 text-sm bg-white border border-[#E8D9CD] rounded-xl focus:outline-none focus:border-[#3B2219]"
                                            />
                                        </div>

                                        {/* Card Number */}
                                        <div>
                                            <label className="block text-xs font-bold text-gray-600 mb-1">Card Number</label>
                                            <input
                                                type="text"
                                                name="cardNumber"
                                                value={formData.cardNumber}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2.5 text-sm bg-white border border-[#E8D9CD] rounded-xl focus:outline-none focus:border-[#3B2219]"
                                            />
                                        </div>

                                        {/* Expiry Date & CVV Row */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold text-gray-600 mb-1">Expiry Date</label>
                                                <input
                                                    type="text"
                                                    name="expiryDate"
                                                    placeholder="MM / YY"
                                                    value={formData.expiryDate}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2.5 text-sm bg-white border border-[#E8D9CD] rounded-xl focus:outline-none focus:border-[#3B2219]"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-gray-600 mb-1">CVV</label>
                                                <input
                                                    type="password"
                                                    name="cvv"
                                                    placeholder="•••"
                                                    maxLength="4"
                                                    value={formData.cvv}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2.5 text-sm bg-white border border-[#E8D9CD] rounded-xl focus:outline-none focus:border-[#3B2219]"
                                                />
                                            </div>
                                        </div>

                                        {/* Checkbox: Save card */}
                                        <div className="flex items-center gap-2 pt-2">
                                            <input
                                                type="checkbox"
                                                name="saveInfo"
                                                id="saveInfo"
                                                checked={formData.saveInfo}
                                                onChange={handleChange}
                                                className="w-4 h-4 rounded accent-[#3B2219]"
                                            />
                                            <label htmlFor="saveInfo" className="text-xs text-gray-600 cursor-pointer">
                                                Save card information for future whims
                                            </label>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* JazzCash Info Banner Box */}
                                        <div className="bg-[#FDF2F2] border border-[#F5C6CB] p-4 rounded-2xl flex items-start gap-3">
                                            <span className="text-lg"><PhoneIcon size={18}/></span>
                                            <p className="text-xs text-[#721C24] leading-relaxed">
                                                Please enter the mobile number associated with your JazzCash account. You will receive a secure prompt on your phone to authorize the payment.
                                            </p>
                                        </div>

                                        {/* Mobile Number Input with +92 Prefix */}
                                        <div>
                                            <label className="block text-xs font-bold text-gray-600 mb-1">Mobile Number</label>
                                            <div className="flex items-center border border-[#E8D9CD] rounded-xl overflow-hidden bg-white focus-within:border-[#3B2219]">
                                                <span className="bg-[#FAF5F0] px-3 py-2.5 text-xs font-bold text-gray-600 border-r border-[#E8D9CD]">
                                                    +92
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="3XX XXXXXXX"
                                                    maxLength="10"
                                                    className="w-full px-3 py-2.5 text-sm focus:outline-none bg-white"
                                                />
                                            </div>
                                            <p className="text-[10px] text-gray-400 mt-2">
                                                By continuing, you agree to JazzCash's terms of service and Kindred Spirits' security protocols.
                                            </p>
                                        </div>
                                    </>
                                )}

                            </motion.div>
                        </div>

                        {/* Bottom Action Buttons (Inside Left Column) */}
                        <div className="flex items-center gap-4 mt-6">
                            <button className="flex-1 py-3.5 bg-[#3B2219] hover:bg-[#281711] text-white font-bold rounded-2xl transition shadow-sm cursor-pointer text-sm">
                                Place Order & Pay
                            </button>
                            <button className="px-6 py-3.5 bg-white border border-[#E8D9CD] hover:bg-gray-50 text-[#3B2219] font-bold rounded-2xl transition cursor-pointer text-sm">
                                Save as Draft
                            </button>
                        </div>

                    </div>

                    {/* RIGHT COLUMN (5 Cols): Order Summary Block */}
                    <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} viewport={{once: true}} transition={{duration:0.8,delay:0.2 }} className="lg:col-span-5 bg-white p-6 rounded-3xl border border-[#E8D9CD] h-fit">
                        <h3 className="font-bold text-sm text-[#3B2219] mb-4">Order Summary</h3>

                        {/* Items */}
                        <div className="space-y-3 pb-4 mb-4 border-b border-[#E8D9CD] text-xs">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700">Hand-Stitched Fawn Plush (Qty: 2)</span>
                                <span className="font-bold text-[#3B2219]">$48.00</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700">Acreage Block Set (Qty: 2)</span>
                                <span className="font-bold text-[#3B2219]">$32.00</span>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="space-y-2 text-xs text-gray-600 mb-4">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="font-medium">$80.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Standard Shipping</span>
                                <span className="font-bold text-green-700 bg-green-50 px-1.5 py-0.5 rounded text-[10px]">FREE</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Estimated Tax</span>
                                <span className="font-medium">$6.40</span>
                            </div>
                        </div>

                        <hr className="my-3 border-dashed border-[#E8D9CD]" />

                        <div className="flex justify-between font-extrabold text-sm text-[#3B2219] mb-4">
                            <span>Total</span>
                            <span>$86.40</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </>
    )
}

export default Checkout
