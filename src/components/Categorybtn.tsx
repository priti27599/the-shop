import React from 'react';


const data = ['T-shirts', 'Hoodies', 'Pants', 'Shorts', 'Hats'];

const Categorybtn = () => {
  return (
    <div className='my-[60px]'>
          <ul className='flex justify-center'>
              {
                  data.map((item) => {
                      return (
                          <li className=' bg-zinc-100 text-xs px-3 py-1 mx-1 rounded-md font-semibold'>{item}</li>
                      )
                  })
              }
          </ul>      
    </div>
  )
}

export default Categorybtn