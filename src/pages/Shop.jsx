import React from 'react'
import { useState } from 'react';
import Search from '../components/Search';
import ProductCard from '../components/ProductCard';
import Home4 from '../components/Home4';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";


const Shop = () => {
     const [searchQuery, setSearchQuery] = useState('');
  const [activeButton, setActiveButton] = useState('All Kits'); 
  const products = [
  {
    id: 1,
    title: "Savannah Friends Kit",
    description:'T-Shirts',
    category: "T-Shirts",
    image: "https://images.unsplash.com/photo-1531796311868-83672cd144f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkcyUyMGRvaW5nJTIwZmFicmljJTIwcGFpbnRpbmdzJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww", 
    rating: 5,
    reviewCount: 122,
    price: "Rs.60,800.00 PKR"
  },
  {
    id: 2,
    title: "Botanical Tote Kit",
    description:'Tote Bags',
    category: "Tote Bags",
    image: "https://media.istockphoto.com/id/2277075343/photo/group-of-diverse-children-learning-acrylic-pouring-art-in-classroom.jpg?s=612x612&w=0&k=20&c=-TeDijdUKdGdFH9SuoiGO-Qs73U0QRi_S2ZFpJTXQU8=",
    rating: 4,
    reviewCount: 122,
    price: "Rs.80,800.00 PKR"
  },
  {
    id: 3,
    title: "Denim Dreamer Set",
    description:'Denim',
    category: "Denim",
    image: "https://media.istockphoto.com/id/1903748694/photo/group-of-diversity-school-children-learning-acrylic-art-together-in-art-class.jpg?s=612x612&w=0&k=20&c=tbj0HUCK6fvSrACw4JAl8S2XTDz75Wv3ltJOmvSizUw=",
    rating: 5,
    reviewCount: 122,
    price: "Rs.77,800.00 PKR"
  },
  {
    id: 4,
    title: "Fabric Painting Kit",
    description:'Paint Sets',
    category: "Paint Sets",
    image: "https://media.istockphoto.com/id/2277074388/photo/group-of-diverse-children-learning-acrylic-pouring-art-in-classroom.jpg?s=612x612&w=0&k=20&c=a45fCV_dROPpHnD766aZ-T-oQsUzZ1buoS4yfY1IfVM=",
    rating: 3,
    reviewCount: 14,
    price: "Rs.80,800.00 PKR"
  },
  {
    id: 5,
    title: "Savannah Friends Kit",
    description:'Paint Sets',
    category: "Paint Sets",
    image: "https://images.unsplash.com/photo-1531796311868-83672cd144f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkcyUyMGRvaW5nJTIwZmFicmljJTIwcGFpbnRpbmdzJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww", 
    rating: 5,
    reviewCount: 122,
    price: "Rs.60,800.00 PKR"
  },
  {
    id: 6,
    title: "Botanical Tote Kit",
    description:'Denim',
    category: "Denim",
    image: "https://media.istockphoto.com/id/2277075343/photo/group-of-diverse-children-learning-acrylic-pouring-art-in-classroom.jpg?s=612x612&w=0&k=20&c=-TeDijdUKdGdFH9SuoiGO-Qs73U0QRi_S2ZFpJTXQU8=",
    rating: 4,
    reviewCount: 122,
    price: "Rs.80,800.00 PKR"
  },
  {
    id: 7,
    title: "Denim Dreamer Set",
     description:'Tote Bags',
    category: "Tote Bags",
    image: "https://media.istockphoto.com/id/1903748694/photo/group-of-diversity-school-children-learning-acrylic-art-together-in-art-class.jpg?s=612x612&w=0&k=20&c=tbj0HUCK6fvSrACw4JAl8S2XTDz75Wv3ltJOmvSizUw=",
    rating: 5,
    reviewCount: 122,
    price: "Rs.77,800.00 PKR"
  },
  {
    id: 8,
    title: "Fabric Painting Kit",
      description:'T-Shirts',
    category: "T-Shirts",
    image: "https://media.istockphoto.com/id/2277074388/photo/group-of-diverse-children-learning-acrylic-pouring-art-in-classroom.jpg?s=612x612&w=0&k=20&c=a45fCV_dROPpHnD766aZ-T-oQsUzZ1buoS4yfY1IfVM=",
    rating: 3,
    reviewCount: 14,
    price: "Rs.80,800.00 PKR"
  }
];
// 3. Combined Filter Logic (Runs automatically on typing or click changes)
  const filteredArticles = products.filter((product) => {
    // A. Check Category matching
    const matchesCategory = activeButton === 'All Kits' || product.category === activeButton;
     // B. Check Text input string matching (looks inside titles and descriptions)
    const cleanQuery = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      product.title.toLowerCase().includes(cleanQuery) || 
      product.category.toLowerCase().includes(cleanQuery);

    return matchesCategory && matchesSearch;
  });
   // Categories helper mapping array
  const dynamicCategories = ['All Kits', 'T-Shirts', 'Tote Bags', 'Denim', 'Paint Sets'];

  return (
    <>
       <div className='md:p-8 p-4 w-full h-full bg-[#f7f3f2] py-16 md:py-26 px-6 md:px-16 lg:px-20'>
       <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[#643e26] text-center fredoka font-extrabold mt-6 text-4xl md:text-4xl lg:text-4xl'>Shop Our Painting Kits</h1>
        <p className='text-[#696462] text-center text-lg tracking-tight mt-2 max-w-2xl'>Discover the joy of tactile creativity. Our kits are designed to nurture imaginative young minds, blending the calm of a well-designed craft with the vibrant energy of childhood discovery.</p>
         <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <div className='bg-[#f3eae8] w-full rounded-3xl flex justify-between p-4 items-center mt-16'>
            <h3 className='text-[#643e26] font-extrabold coiny-regular text-xl hidden lg:block'>Categories</h3>
            <div className='flex flex-wrap justify-between gap-1'>
       {dynamicCategories.map((cat) => {
            const isActive = activeButton === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveButton(cat)}
                className={`font-bold text-sm border border-gray-300 rounded-3xl px-4 py-1.5 transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:scale-104 cursor-pointer
                  ${isActive 
                    ? 'bg-[#643e26] text-white border-slate-800' 
                    : 'bg-white text-[#643e26] hover:text-[#D6B26F]'
                  }`}
              >
                {cat}
              </button>
            );
          })}
      </div>
        </div>
         <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-18'>
             {filteredArticles.length > 0 ? (
    filteredArticles.map((products) => (
             <ProductCard 
        key={products.id}
          title={products.title}
          image={products.image}
          rating={products.rating}
          reviewCount={products.reviewCount}
          price={products.price}
          />
            ))
  ) : (
          /* Empty Search Fallback State Notice text description feedback UI fallback */
          <div className="col-span-full text-center py-16 text-gray-400 italic">
            No articles found matching your criteria.
          </div>
          )}
           </div>
        </div>
          <div className=' w-full h-full bg-[#f7f3f2] lg:py-24 lg:px-34 p-4'>
       <div className='flex flex-col justify-center items-center md:p-8 p-4 py-16 md:py-18 px-6 md:px-16 lg:px-20 rounded-2xl bg-[#e9ddda]'>
            <h1 className='text-2xl text-[#78311B] md:text-3xl font-semibold text-center'>Share The Creativity</h1>
            <p className='text-center mt-2 text-[#78311B] max-w-2xl mt-8'>Join our community of little artists! Sign up for tips on fabric care, new stencil releases and 10% Off your first kit.</p>
             <Link to='/contact'> <button className='bg-[#5A1B08] self-center text-[#f6edde] w-fit rounded-full py-3 text-sm px-12 mt-8'>
            Join Us
          </button></Link>
          </div>
        </div>
        </>
  )
}

export default Shop
