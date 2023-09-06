import React, { useEffect, useState } from 'react'
import guest from '../../assets/Dashboard-icons/guest.png'
import user from '../../assets/Dashboard-icons/user.png'




const Bar1 = ({val}) =>{
    const elem= <div className={`bottom-0 z-0   absolute bg-[#98D89E] mb-1.5 mx-1 rounded w-5 md:w-8 lg:w-10`} style={{top:val}}></div>
    
    return elem
}
const Bar2 = ({val}) =>{
    const elem= <div className={`bottom-0  z-0 left-6 md:left-9  lg:left-12 absolute bg-[#EE8484] mb-1.5 mx-1 rounded w-5 md:w-8 lg:w-10  `} style={{top:val}}></div>
    
    return elem
}


const Barchart = ({data}) => {
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        
        });
        const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            
        })
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);
        
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
      }, [screenSize])
    
  return (
    <div className='w-[92%] md:w-[91%] lg:w-[97%] py-3 px-4 bg-white border-2 border-[#E0E0E0] border-solid rounded-2xl shadow-[3px_4px_11px_0px_#62626226] ml-4 md:ml-9 lg:ml-2'>
       
        <div className='flex justify-between mr-8 font-montserrat ml-4 mt-2'>
            <div>
                <p className='font-bold text-lg'>Activites</p>
                <p className='text-sm text-[#858585]'>May - June 2021</p>
            </div>
            <div className='flex items-end flex-col space-y-3 md:space-y-0 md:flex-row font-lato text-sm'>
                <div className='mx-2 lg:mx-10 flex items-center'>
                    <img src={guest} className='mx-3' alt="" />
                    Guest
                </div>
                <div className='mx-4 flex items-center'>
                    <img className='mx-3' src={user} alt="" />
                    User
                </div>
            </div>
        </div>
        <div className='relative font-lato mt-3'>
            
            <div className='absolute z-0 w-[100%]'>
                <div className='flex items-center'>
                    <span className='text-sm text-[#858585] ml-4 mr-3 my-3'>500</span>
                    <hr className='w-[94%]' />
                </div>
                <div className='flex items-center'>
                    <span className='text-sm text-[#858585] ml-4 mr-3 my-3'>400</span>
                    <hr className='w-[94%]' />
                </div>
                <div className='flex items-center'>
                    <span className='text-sm text-[#858585] ml-4 mr-3 my-3'>300</span>
                    <hr className='w-[94%]' />
                </div>
                <div className='flex items-center'>
                    <span className='text-sm text-[#858585] ml-4 mr-3 my-3'>200</span>
                    <hr className='w-[94%]' />
                </div>
                <div className='flex items-center'>
                    <span className='text-sm text-[#858585] ml-4 mr-3 my-3'>100</span>
                    <hr className='w-[94%]' />
                </div>
                <div className='flex items-center justify-end'>
                    <span className='text-sm text-[#858585] ml-4 mr-3 my-3'>0</span>
                    <hr className='w-[94%]' />
                </div>

                
                
            </div>
            <div className='relative flex items-end w-36 md:w-auto lg:w-auto left-24 md:left-8 lg:left-0 z-0 h-[17rem] justify-evenly'>
                
                {
                    data.slice(0,((screenSize.dynamicWidth<=640)?3:4)).map((e,index)=>{
                        
                        return (
                            <div key={index} className='z-0 flex flex-col items-center'>
                                <div className='flex items-center relative h-[225px] w-20'>
                                    
                                    <Bar1 val={e.user}/>
                                    <Bar2 val={e.guest}/>
                                    
                                </div>
                                <div className='text-[#858585]'>
                                    Week {e.week}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Barchart