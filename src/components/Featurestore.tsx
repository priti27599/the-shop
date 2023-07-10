import React from 'react';

const data = [
    {
        name: 'saaaaadasajasgsa',
        para: 'asgsgdshisdhds'
    },
    {
        name: 'Shoes store',
        para: 'Shoes for skateboarding'
    },
    {
        name: 'Skate store',
        para: 'Store for skateboarding goods'
    },
    {
        name: 'e22',
        para:'2e23',
    }
]

const Featurestore = () => {
  return (
    <div className='lg:mx-[30px]'>
      <div className='flex justify-between mx-[10px] my-[60px] lg:my-[10px]'>
            <h1 className='text-3xl font-semibold'>Featured stores</h1>
      </div> 
      <div>
        <ul className='lg:flex lg:flex-wrap'>
          {
            data.map((item) => {
                return (
                    <li className='border mx-3 my-4 rounded-md px-5 py-5 lg:w-[280px] lg:mx-2'>
                        <h2 className='text-xl font-semibold'>{item.name}</h2>
                        <p className='text-sm text-slate-500 my-1'>{item.para}</p>
                        <button className='border text-xs bg-black text-white w-[100%] py-2 rounded-md my-3'>View products</button>
                    </li>
                )
            })          
          }       
        </ul>          
      </div>    
    </div>
  )
}

export default Featurestore