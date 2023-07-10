import React from 'react'
import MainNav from './main-nav';
import { Icons } from './icons';
import { Divide } from 'lucide-react';

const SiteHeader = () => {
  return (
      <header className='sticky top-0 z-40 text-black pl-5 pr-7 border bg-white'>
          <div className='conatiner mx-auto flex justify-between h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
              <MainNav/>
              <div>
                  <nav className='flex items-center space-x-1 justify-end'>
                      <div className='flex items-center space-x-1 relative left-[20px]'>
                      <button className='relative border border-gray-700 right-[55px] xl:left-[45px] lg:p-2 p-1 rounded-md items-center xl:border-none'>
                      <Icons.search className='h-5 w-5 '/>      
                      </button>
                      
                      <input type='text' placeholder="Search products..." className='bg-white hidden xl:block font-semibold text-black border border-zinc-300 rounded-md text-sm px-[43px] py-3 focus:outline-none hover:bg-zinc-800 focus:ring-1 focus:ring-black-500'/>
                      <button className=' py-2 px-2 hidden xl:block items-center rounded-md bg-zinc-300 text-xs relative left-[-62px]'>ctrl K</button>
                      </div>
                      
                      <div>
                          <button className=' border border-gray-700 lg:p-2 p-1 rounded-md relative right-[10px] top-[3px] hover:bg-zinc-800'>
                              <Icons.cart className='h-5 w-5'/>
                          </button>
                         
                          <a href="/">
                              <div className='inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 bg-black text-white shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs'>Sign In</div>
                          </a>
                      </div>
                  </nav>
              </div>
          </div>
      </header>
  )
}

export default SiteHeader;