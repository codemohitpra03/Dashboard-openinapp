import React from 'react'

const Barchart_shimmer = () => {
  return (
    <div className='w-[92%] flex flex-col  justify-end animate-pulse h-[60vh] md:h-[50vh] relative md:w-[91%] lg:w-[97%] py-3 px-4 bg-gray-400   border-solid rounded-2xl  ml-4 md:ml-9 lg:ml-2'>
        <div className='flex justify-evenly w-[100%] space-x-32 pr-16 md:pr-20'>
            <div className='flex space-x-[35px] md:space-x-[50px]'>
                <div className='w-7 md:w-10 absolute bg-gray-300 h-[50%] rounded-lg bottom-12'></div>
                <div className='w-7 md:w-10 absolute bg-gray-300 h-[40%] rounded-lg bottom-12'></div>
            </div>
            <div className='flex space-x-[35px] md:space-x-[50px]'>
                <div className='w-7 md:w-10 absolute bg-gray-300 h-[50%] rounded-lg bottom-12'></div>
                <div className='w-7 md:w-10 absolute bg-gray-300 h-[40%] rounded-lg bottom-12'></div>
            </div>
            <div className='flex space-x-[35px] md:space-x-[50px]'>
                <div className='w-7 md:w-10 absolute bg-gray-300 h-[50%] rounded-lg bottom-12'></div>
                <div className='w-7 md:w-10 absolute bg-gray-300 h-[40%] rounded-lg bottom-12'></div>
            </div>
        </div>
        <div className='w-[90%] md:w-[97%] border-2 absolute bottom-10'></div>
    </div>
  )
}

export default Barchart_shimmer