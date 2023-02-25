import React from 'react'

const AfterCart = () => {
  return (
    <div className='after-cart flex items-center'>
        <button className='flex items-center gap-2 text-left mt-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-4'>+</button>
        <h2 className='text-xl mt-3'>0</h2>
        <button className='flex items-center gap-2 text-left mt-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg ml-4'>-</button>
    </div>
  )
}

export default AfterCart