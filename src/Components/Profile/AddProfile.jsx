import React, { useState } from 'react'
import addProfile from '../../assets/Dashboard-icons/addProfile.png'
import close from '../../assets/Dashboard-icons/close.png'
import {useSelector} from 'react-redux'
import DisplayProfile from './DisplayProfile'
import Basic from './Basic'
import Contact from './Contact'





const AddProfile = () => {
    const [isBasic, setIsBasic] = useState(true)
    const [profile, setProfile] = useState(false)
    const [userDetails, setUserDetails] = useState({
        name:"",
        email:"",
        phone:"",
        insta:"",
        youtube:""
    })
    const userProfile = useSelector((store)=>store.user)
  return (
    <>
    
        {
            profile?<DisplayProfile/>:(<div onClick={()=>{
                document.getElementById('form').style.display='flex'
                
            }} className='z-10 cursor-pointer ml-7 md:mx-10 lg:ml-auto flex items-center justify-center py-3 px-4 mr-6 my-8 h-56 bg-white border-2 border-[#E0E0E0] border-solid rounded-2xl shadow-[3px_4px_11px_0px_#62626226]'>
            <div className='flex flex-col  items-center'>
                <img width={80} className='my-2' src={addProfile} alt="" />
                <p className='my-2 font-semibold font-figtree text-[#858585] text-xl lg:text-base'>Add Profile</p>
            </div>
        </div>)
        }
        <div id='form' className='hidden flex items-center justify-center fixed z-100 min-h-screen w-[100%] top-0 left-0 font-figtree  bg-[rgb(0,0,0)]/50'>
            <div className='bg-white opacity-100 w-[87%] lg:w-[45%]  rounded-2xl'>
                <div className='flex justify-between items-center mx-7 my-3'>
                    <p className='font-semibold text-2xl'>Add New Profile</p>
                    
                    <button onClick={()=>{
                        document.getElementById('form').style.display='none'; 
                        setUserDetails({
                            name:"",
                            email:"",
                            phone:"",
                            insta:"",
                            youtube:""
                        })
                        setIsBasic(true)
                    }}><img src={close} alt="" /></button>
                </div>
                <hr className=''/>
                <div className=' grid grid-cols-2 z-50 items justify-items-center mt-5 mb-10'>
                    <div className=' font-semibold flex flex-col justify-center items-center cursor-default'>
                        Basic   
                        <div className={`border-y-2 rounded-[30px] border-solid w-[100px] md:w-[200px] lg:w-[120px] lg:w-[200px]`} style={{
                            borderColor:((isBasic)?"#3F84F8":"#D9D9D9")
                        }}></div>
                    </div>
                    <div className='font-semibold flex flex-col justify-center items-center cursor-default'>
                        Contact
                        <div className={`border-y-2 rounded-3xl border-solid w-[100px] md:w-[200px] lg:w-[120px] lg:w-[200px]`} style={{
                            borderColor:((!isBasic)?"#3F84F8":"#D9D9D9")
                        }}></div>
                    </div>
                </div>
                {/* <Basic/>     */}
                {/* <Contact/> */}
                {
                    isBasic?<Basic changeLayout={setIsBasic} userDetails={userDetails} setUserDetails={setUserDetails}/>:<Contact changeLayout={setIsBasic} userDetails={userDetails} setUserDetails={setUserDetails} setProfile={setProfile}/>
                }

                
            </div>
        </div>
    </>
  )
}

export default AddProfile