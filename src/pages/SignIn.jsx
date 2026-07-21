import { Eye, EyeClosed, Pencil } from 'lucide-react';
import React, { useState } from 'react'

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
    <div className='md:p-8 p-4 w-full h-full bg-[#f7f3f2] py-16 md:py-26 px-6 md:px-16 lg:px-20'>
      {/* Main Container Card */}
      <div className="max-w-4xl w-full mx-auto bg-white rounded-[32px] border border-[#E8D9CD] shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side: Brand Promo Banner */}
        <div className="bg-[#FAF5F0] p-8 md:p-12 flex flex-col justify-between relative border-r border-[#E8D9CD]">
          <div>
            <div className="w-8 h-8 rounded-full bg-[#f0dacb] flex items-center justify-center text-sm mb-6">
             <Pencil size={18} className='text-[#66432e]'/>
            </div>
            <h2 className="text-3xl font-extrabold text-[#3B2219] leading-tight">
              Unleash Their <br />
              <span className="text-[#D37356]">Little Genius.</span>
            </h2>
            <p className="text-xs text-gray-600 mt-3 leading-relaxed max-w-xs">
              Every stroke is a story. Join our community of little makers and start painting memories today.
            </p>
          </div>

          {/* Decorative Preview Image Box */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-[#E8D9CD] shadow-xs">
            <img 
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&auto=format&fit=crop&q=60" 
              alt="Art supplies" 
              className="w-full h-32 object-cover opacity-90"
            />
          </div>
        </div>

        {/* Right Side: Sign In Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-xl font-extrabold text-[#3B2219]">Welcome Back, Maker!</h3>
            <p className="text-xs text-gray-500 mt-1">Log in to your Kindred Spirits account.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            
            {/* Email Address */}
            <div>
              <label className="block text-[11px] font-bold text-gray-600 mb-1">Email Address</label>
              <input 
                type="email" 
                name="email"
                placeholder="hello@maker.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#E8D9CD] rounded-xl focus:outline-none focus:border-[#3B2219] text-gray-800 placeholder-gray-400"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-[11px] font-bold text-gray-600">Password</label>
                <a href="#forgot" className="text-[10px] text-[#D37356] hover:underline font-medium">Forgot Password?</a>
              </div>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#E8D9CD] rounded-xl focus:outline-none focus:border-[#3B2219] text-gray-800 placeholder-gray-400 pr-10"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 text-xs cursor-pointer"
                >
                  {showPassword ? <Eye size={18}/> : <EyeClosed size={18}/>}
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button 
              type="submit"
              className="w-full py-3 bg-[#D37356] hover:bg-[#bd6348] text-white text-xs font-bold rounded-xl transition shadow-sm cursor-pointer mt-2"
            >
              Sign In →
            </button>
          </form>
        </div>
       </div>
      </div>
    </>
  )
}

export default SignIn
