import React from 'react'
import { Icons } from './icons'

const News = () => {
    return (
    <div className='mx-[20px] lg:mx-[15px]'>
      <h1 className='py-[10px] text-base font-semibold'>Subscribe to our newsletter</h1>
       <div className='flex mx-[1%] lg:mx-[1px] bg-white w-[98%] lg:w-[100%] justify-between font-normal my-[10px] py-[5px] px-[5px] border border-zinc-300 rounded-md lg:text-base text-sm  '>
        <input placeholder='itspriti1999@gmail.com' className='px-2'/>
        <button className='border bg-black text-white text-sm px-2 py-2 rounded-md'>
           <Icons.send className='h-3 w-3'/>         
        </button>     
      </div>      
    </div>
    
  )
}

export default News