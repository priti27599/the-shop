import React from 'react';

const data = [
    {
    main: "An e-commerce skateshop built with everything new in Next.js 13 ",
    para: "Buy and sell skateboarding products from independent brands and stores around the world",
    btn1: "Buy Now",
    btn2: "Sell Now"
    }
]

const SiteHome = () => {
    return (
        <div>{
            data.map((item) => {
                return (
                    <div className='lg:py-[190px] lg:px-[100px] py-[70px] px-[50px] my-[20px]'>
                      <h1 className='text-center text-3xl font-bold lg:text-6xl lg:py-[10px] '>{item.main}</h1>
                      <p className='text-center px-[40px] py-[30px] lg:px-[300px] lg:py-[10px] text-xl text-slate-500'>{item.para}</p>
                      <div className='items-center text-center'>
                            <button className='border mx-2 py-2 px-7 rounded-md bg-black text-white text-md hover:bg-gray-900'>{item.btn1}</button> 
                            <button className='border mx-2 py-2 px-7 rounded-md bg-white text-black text-md hover:bg-gray-200'>{item.btn2}</button>
                      </div>  
                    </div>
            )
        })
        }</div>
  )
}

export default SiteHome;