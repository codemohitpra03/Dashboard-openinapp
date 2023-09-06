import React from 'react'

const Piechart = ({data}) => {




    const Chart = ()=>{
        let prev=0;
        let a=[];
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            a.push(`${element.color} calc(${prev}*1%)`)
            a.push(`${element.color} calc(${prev+element.percentage}*1%)`)
            prev=element.percentage
        }
        let style="";
        a.forEach((e)=>{
            style+=e
            style+=","
    
        })
        style+=`${data[data.length-1].color} calc(100*1%)`
        
        return (
            <div className='flex items-center justify-center md:justify-start lg:justify-center lg:block md:mx-12 lg:mx-0'>
                <div id="grad1" className='h-[150px] w-[150px] lg:h-[120px] lg:w-[120px] mx-2 rounded-full' style={{
                    background:`conic-gradient(${style})`,
                    WebkitMask:"radial-gradient(farthest-side,#0000 calc(99% - 13px),#000 calc(100% - 13px))",
                    mask:"radial-gradient(farthest-side,#0000 calc(99% - 13px),#000 calc(100% - 13px))"
                }}></div>
            </div>
        ) 
    }




  return (
    <div className='lg:flex md:flex mx-7 md:mx-10  lg:mr-4 lg:ml-2 bg-white border-2 border-[#E0E0E0] border-solid rounded-2xl shadow-[3px_4px_11px_0px_#62626226] h-auto md:h-64 lg:h-56 py-3 px-4  my-8'>
        <div className='w-full mx-1 my-1 space-y-7 '>
            <div className='flex items-center justify-start mx-2'>
                <p className='font-bold text-xl md:text-2xl lg:text-xl md:mx-14 lg:mx-0'>Top Products</p>
                <p className='md:hidden text-xs ml-24 mb-6 text-[#858585]'>May - June 2021</p>
            </div>
            <Chart/>
        </div>
        <div className='w-full space-y-2 md:space-y-4 lg:space-x-2 lg:mt-3 mt-8 md:mt-2'>
            <p className='hidden  md:block md:text-base lg:text-xs md:ml-40 lg:ml-24  lg:mb-6 md:text-[#858585]'>May - June 2021</p>
          {
            data.map((e,index)=>{
                return (
                    <div key={index} className='mx-5'>
                        <div>
                            <div className='flex items-center '>
                                <div className={`h-3 w-3 rounded-full`} style={{
                                    backgroundColor:e.color
                                }}></div>
                                <p className='font-bold ml-3 text-sm lg:text-xs'>
                                    {e.name}
                                </p>
                            </div>
                            <p className='text-[#858585] text-xs mx-7 my-1'>
                                {e.percentage}%
                            </p>
                        </div> 
                    </div>
                )
            })
          }
        </div>
    </div>
  )
}

export default Piechart