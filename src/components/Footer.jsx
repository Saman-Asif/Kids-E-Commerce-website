import React from 'react'

const Footer = () => {
  return (
    <>
       <div className='bg-[#e9ddda] p-4'>
    <div className='h-auto mx-auto lg:gap-10 w-full grid md:grid-cols-[2fr_1fr_1fr_1fr] px-6 py-12 grid-col'>
        <div1 className='pt-6'>
      <h1 className='text-3xl coiny-regular text-[#643e26]'>Kindered Spirits</h1>
      <p className='text-[#643e26] opacity-80 max-w-sm text-sm mt-4 mb-4'>Crafting joyfull experiences for the next generation of creators.</p>
    </div1>
    <div2 className='pt-6 text-[#643e26]'>
        <p className='text-[#643e26] text-xs tracking-widest uppercase font-semibold'>Product</p>
        <ul className='space-y-3 mt-3'>
            <li>
                   <a href='#' className="nav-link text-sm" >Home</a>
            </li>
            <li>
                 <a href='#products' className="nav-link text-sm" >Products</a>
            </li>
             <li>
                  <a href='#services' className="nav-link text-sm" >Services</a>
            </li>
            </ul>
    </div2>
    <div3 className='pt-6 text-[#643e26]'>
        <p className='text-[#643e26] font-semibold text-xs tracking-widest uppercase'>GET STARTED</p>
        <ul className='space-y-3 mt-3'>
            <li>
                  <a href='#aboutus' className="nav-link text-sm" >About</a>
            </li>
            <li>
                   <a href='#contactus' className="nav-link text-sm" >Contact</a>
            </li>
             <li>
                  <a href='#' className="nav-link text-sm" >Kindred Spirits</a>
            </li>
            </ul>
    </div3>
    <div4 className='pt-6 space-y-3 text-[#643e26]'>
        <p className='text-[#643e26] text-xs tracking-widest uppercase font-semibold'>LEGAL</p>
       <ul className='space-y-3 mt-3'>
            <li>
                  <a href='' className="nav-link text-sm" >Cart</a>
            </li>
            <li>
                  <a href='' className="nav-link text-sm" >Payment</a>
            </li>
            </ul>
    </div4>
    </div>
    <div className='border-t border-white/10 w-full lg:flex lg:justify-between pt-4'>
    <p className='text-[#643e26] opacity-80 text-fg font-serif'>© 2026 Kindred Spirits</p>
    <p className='text-[#643e26] opacity-80 text-sm flex gap-2 items-center justify-center'>Nurturing Energies</p>
    </div>
    </div>
    </>
  )
}

export default Footer
