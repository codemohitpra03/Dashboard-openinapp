import React from 'react'

const Piechart_shimmer = () => {
  return (
    <div className='lg:flex relative md:flex animate-pulse bg-gray-400  mx-7 md:mx-10  lg:mr-4 lg:ml-2 bg-white border-2 border-[#E0E0E0] border-solid rounded-2xl shadow-[3px_4px_11px_0px_#62626226] h-[60vh] md:h-64 lg:h-56 py-3 px-4  my-8'>
        <div className='absolute w-[20%] bg-gray-500 h-5 mx-5 my-2'>

        </div>
        <div className='absolute w-[90%] top-16 grid items-center  md:grid-cols-2 grid-cols-1'>
            <div className='w-32 h-32 mx-2 rounded-full bg-gray-500'>
            </div>
            <div className='mx-6 h-[50%] w-[50%] space-y-6'>
                <div className='space-y-1'>
                    
                <div className='bg-gray-500 h-3 w-36'></div>
                <div className='bg-gray-500 h-2 w-10'></div>
                </div>
                <div className='space-y-1'>
                    
                <div className='bg-gray-500 h-4 w-36'></div>
                <div className='bg-gray-500 h-2 w-10'></div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Piechart_shimmer