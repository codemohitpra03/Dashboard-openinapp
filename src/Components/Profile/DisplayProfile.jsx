import {useSelector} from 'react-redux'
import phone from '../../assets/Dashboard-icons/phone.png'
import mail from '../../assets/Dashboard-icons/mail.png'
import instagram from '../../assets/Dashboard-icons/instagram.png'
import utube from '../../assets/Dashboard-icons/utube.png'




const DisplayProfile = () =>{
    const userProfile = useSelector((store)=>store.user)
    
    return (
        <div className='z-10 font-figtree md:mx-10   py-3 px-4 mr-6 lg:mr-5 my-8 ml-6 lg:ml-0  lg:h-56 bg-white border-2 border-[#E0E0E0] border-solid rounded-2xl shadow-[3px_4px_11px_0px_#62626226]'>
            <p className='font-bold text-4xl lg:font-semibold lg:text-2xl my-5 mx-4'>{userProfile.user.name}</p>
            <div className='grid md:py-2 md:grid-cols-2'>
                <div className='space-y-6 lg:space-y-4'>
                    <div className='flex items-center justify-start mt-5 ml-4 space-x-5 lg:space-x-0'>
                        <img src={phone} className='mr-3 w-[50px] lg:w-[32px]' alt="" />
                        <p className='text-2xl lg:text-sm underline'>{userProfile.user.phone}</p>
                    </div>
                    <div className='flex items-center justify-start lg:my-6 ml-4 space-x-5 lg:space-x-0'>
                        <img src={mail} className='mr-3 w-[50px] lg:w-[32px]' alt="" />
                        <p className='text-2xl lg:text-sm underline break-all cursor-pointer'>{userProfile.user.email}</p>
                    </div>
                </div>
                
                <div className='space-y-6 lg:space-y-4'>
                    {
                        userProfile.user.insta && (
                            <div className='flex items-center justify-start mt-5 ml-4  space-x-5 lg:space-x-0'>
                                <img src={instagram} className='mr-3  w-[50px] lg:w-[32px]' alt="" />
                                <p className='text-2xl lg:text-sm underline break-all cursor-pointer'>{userProfile.user.insta}</p>
                            </div>
                        )
                        
                    }
                    {
                        userProfile.user.youtube && (
                            <div className='flex items-center justify-start mt-5 ml-4 space-x-5 lg:space-x-0'>
                                <img src={utube}  className='mr-3 w-[50px] lg:w-[32px]' alt="" />
                                <p className='text-2xl lg:text-sm underline break-all cursor-pointer'>{userProfile.user.youtube}</p>
                            </div>
                        )
                    }
                    
                </div>

            </div>
        </div>
    )
}

export default DisplayProfile