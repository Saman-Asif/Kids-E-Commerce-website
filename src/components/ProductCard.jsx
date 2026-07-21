import React from 'react'

const ProductCard = ({image, rating, title, price,reviewCount}) => {
       const renderStars = () => {
        return Array.from({ length:5 },(_, index) => (
            <span 
            key={index}
            className={`text-lg ${index < rating ? 'text-amber-400' : 'text-gray-300'}`}
            >
          ★
            </span>
        ))
    }
  return (
        <div className='flex flex-col bg-white border border-gray-200 group h-full rounded-2xl hover:shadow-2xl hover:scale-102'>
      <div className='w-full aspect-[16/10] bg-gray-50 overflow-hidden relative rounded-t-2xl'>
     <img src={image} alt={title} className='w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105' />
      </div>
      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-sm font-medium text-gray-800 mb-1 tracking-tight">
          {title}
        </h3>

        {/* Ratings & Reviews */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">{renderStars()}</div>
          <span className="text-xs text-gray-500">({reviewCount})</span>
        </div>

        {/* Price */}
        <p className="text-sm font-semibold text-gray-900 mb-4">
          {price}
        </p>

        {/* Action Button */}
        <button className="mt-auto w-full py-2.5 px-4 text-sm font-medium text- rounded-full bg-[#eed0c7] hover:bg-[#f0e2de] transition-colors duration-200">
          Add to Bag
        </button>
      </div>
    </div>
  )
}

export default ProductCard
