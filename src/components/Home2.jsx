import React, { useRef } from 'react'
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from "motion/react"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const Home2 = () => {
      const products = [
  {
    id: 1,
    title: "Savannah Friends Kit",
    image: "https://images.unsplash.com/photo-1531796311868-83672cd144f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkcyUyMGRvaW5nJTIwZmFicmljJTIwcGFpbnRpbmdzJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww", 
    rating: 5,
    reviewCount: 122,
    price: "Rs.60,800.00 PKR"
  },
  {
    id: 2,
    title: "Botanical Tote Kit",
    image: "https://media.istockphoto.com/id/2277075343/photo/group-of-diverse-children-learning-acrylic-pouring-art-in-classroom.jpg?s=612x612&w=0&k=20&c=-TeDijdUKdGdFH9SuoiGO-Qs73U0QRi_S2ZFpJTXQU8=",
    rating: 4,
    reviewCount: 122,
    price: "Rs.80,800.00 PKR"
  },
  {
    id: 3,
    title: "Denim Dreamer Set",
    image: "https://media.istockphoto.com/id/1903748694/photo/group-of-diversity-school-children-learning-acrylic-art-together-in-art-class.jpg?s=612x612&w=0&k=20&c=tbj0HUCK6fvSrACw4JAl8S2XTDz75Wv3ltJOmvSizUw=",
    rating: 5,
    reviewCount: 122,
    price: "Rs.77,800.00 PKR"
  },
  {
    id: 4,
    title: "Fabric Painting Kit",
    image: "https://media.istockphoto.com/id/2277074388/photo/group-of-diverse-children-learning-acrylic-pouring-art-in-classroom.jpg?s=612x612&w=0&k=20&c=a45fCV_dROPpHnD766aZ-T-oQsUzZ1buoS4yfY1IfVM=",
    rating: 3,
    reviewCount: 14,
    price: "Rs.80,800.00 PKR"
  },
  {
    id: 5,
    title: "Savannah Friends Kit",
    image: "https://images.unsplash.com/photo-1531796311868-83672cd144f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkcyUyMGRvaW5nJTIwZmFicmljJTIwcGFpbnRpbmdzJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww", 
    rating: 5,
    reviewCount: 122,
    price: "Rs.60,800.00 PKR"
  },
  {
    id: 6,
    title: "Botanical Tote Kit",
    image: "https://media.istockphoto.com/id/2277075343/photo/group-of-diverse-children-learning-acrylic-pouring-art-in-classroom.jpg?s=612x612&w=0&k=20&c=-TeDijdUKdGdFH9SuoiGO-Qs73U0QRi_S2ZFpJTXQU8=",
    rating: 4,
    reviewCount: 122,
    price: "Rs.80,800.00 PKR"
  },
  {
    id: 7,
    title: "Denim Dreamer Set",
    image: "https://media.istockphoto.com/id/1903748694/photo/group-of-diversity-school-children-learning-acrylic-art-together-in-art-class.jpg?s=612x612&w=0&k=20&c=tbj0HUCK6fvSrACw4JAl8S2XTDz75Wv3ltJOmvSizUw=",
    rating: 5,
    reviewCount: 122,
    price: "Rs.77,800.00 PKR"
  },
  {
    id: 8,
    title: "Fabric Painting Kit",
    image: "https://media.istockphoto.com/id/2277074388/photo/group-of-diverse-children-learning-acrylic-pouring-art-in-classroom.jpg?s=612x612&w=0&k=20&c=a45fCV_dROPpHnD766aZ-T-oQsUzZ1buoS4yfY1IfVM=",
    rating: 3,
    reviewCount: 14,
    price: "Rs.80,800.00 PKR"
  }
];

// Refs for custom navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <div className='md:p-8 p-4 w-full h-full bg-white border-b border-gray-100 py-16 md:py-26 px-6 md:px-16 lg:px-20'>
       <div className='flex flex-col'>
        <motion.h1  initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}} viewport={{once: true}}  className='text-[#643e26] fredoka font-extrabold mt-6 text-3xl md:text-4xl lg:text-4xl'>Our Painting Kits</motion.h1>
        <div className="flex justify-between items-end">
        <motion.p  initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.2}} viewport={{once: true}} className='text-[#696462] text-lg tracking-tight mt-2 max-w-sm md:max-w-md'>Professional quality materials for tiny visionaries.</motion.p>
        <motion.div  initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} transition={{duration:0.3, delay:0.3}} viewport={{once: true}}   className="flex space-x-2">
          {/* Custom Arrow Targets */}
            <button ref={prevRef} className="custom-prev w-9 h-9 rounded-full bg-[#643e26] border border-[#d6cbbe] flex items-center text-[#e9ddda] hover:text-[#643e26] justify-center hover:bg-[#f5efeb] transition cursor-pointer">
              <ChevronLeft aria-label="Previous slide" className="w-4 h-4" />
            </button>
            <button ref={nextRef} className="custom-next bg-[#643e26] w-9 h-9 rounded-full border border-[#d6cbbe] flex items-center text-[#e9ddda] hover:text-[#643e26] justify-center hover:bg-[#f5efeb] transition cursor-pointer">
              <ChevronRight aria-label="Next slide" className="w-4 h-4" />
            </button>
          </motion.div>
          </div>
          <div className=" mt-16 border-gray-200 gap-4">
          <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        onInit={(swiper) => {
          // Assign refs to swiper parameters dynamically on init
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="pb-4"
      >
        {products.map((product) => (
          <SwiperSlide className='w-60'>
          <ProductCard 
          title={product.title}
          image={product.image}
          rating={product.rating}
          reviewCount={product.reviewCount}
          price={product.price}
          >
          </ProductCard>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
       </div>
      </div>
    </>
  )
}

export default Home2
