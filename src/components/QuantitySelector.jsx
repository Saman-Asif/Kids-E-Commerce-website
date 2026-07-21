import React, { useState } from 'react'

const QuantitySelector = () => {
    const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };
  return (
    <>
      <div className="flex items-center border border-[#c4c2c0] bg-white rounded-full px-3 w-fit shadow-sm">
      {/* Decrease Button */}
      <button 
        onClick={decrease}
        className="text-gray-600 hover:text-black font-bold px-2 py-1 transition cursor-pointer select-none"
        aria-label="Decrease quantity"
      >
        -
      </button>

      {/* Quantity Number Display */}
      <span className="px-4 text-sm font-semibold text-[#3B2219] select-none">
        {quantity}
      </span>

      {/* Increase Button */}
      <button 
        onClick={increase}
        className="text-gray-600 hover:text-black font-bold px-2 py-1 transition cursor-pointer select-none"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
    </>
  )
}

export default QuantitySelector
