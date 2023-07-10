import Link from 'next/link';
import React from 'react';

const cards = [
    {
        name: 'Skateboards',
        image: "https://raw.githubusercontent.com/sadmann7/skateshop/main/public/images/skateboard-one.webp",
        
    },
    {
        name: 'Clothing',
        image: 'https://raw.githubusercontent.com/sadmann7/skateshop/main/public/images/clothing-one.webp',
    },
    {
        name: 'Shoes',
        image:'https://raw.githubusercontent.com/sadmann7/skateshop/main/public/images/shoe-one.webp'
    },
    {
        name: 'Accessories',
        image:'https://raw.githubusercontent.com/sadmann7/skateshop/main/public/images/backpack-one.webp',
    }
]

function Category() {
  return (
      <div>
          <div>
          <h1 className='text-center text-2xl font-bold lg:text-6xl lg:py-[10px]'>Categories</h1>  
          <p className='text-center px-[40px] py-[30px] lg:px-[300px] lg:py-[10px] text-xl text-slate-500'>Explore our categories and find the best products for you</p>  
          
          <div>
              <ul className='flex flex-wrap justify-center my-[18px]'>
                  {
                      cards.map((card) => {
                          return (
                              <Link href='/'>
                                  <li className='mx-[8px] border-none text-center '>
                                      <div className='hover02'>
                                         <img src={card.image} alt={card.name} className='lg:h-[350px] lg:w-[280px] h-[490px] w-[450px] object-cover rounded-md brightness-50 hover:scale-105 transition-transform duration-300 ease-in-out'/>
                                      </div>
                                  <span className='relative lg:top-[-200px] top-[-230px] text-white text-2xl font-bold'>{card.name}</span>
                                </li>
                              </Link>
                          )
                      })
                  }
              </ul>
              </div>
          </div> 
          <div className='border text-center py-[85px] px-[30px] mx-[15px] rounded-md my-[15px] lg:py-[65px] lg:mx-[40px] '>
              <h1 className='text-2xl font-semibold lg:text-3xl'>Do you want to sell your products on our website?</h1>
              <button className='border bg-black text-white my-[10px] lg:my-[20px] py-[8px] px-[18px] text-sm rounded-md hover:bg-gray-800'>Create a store</button>
          </div>
    </div>
  )
}

export default Category