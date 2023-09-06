import {useDispatch} from 'react-redux'
import { addUser } from '../../Store/UserSlice'



const Contact = ({changeLayout,userDetails,setUserDetails, setProfile}) =>{
    const handleContact = ()=>{
        changeLayout(true)
    }
    const dispatch = useDispatch()
    return (
        <div className='flex flex-col'>
            <label className='mx-7 mb-1'>Instagram Link <span className='text-[#999CA0]'>(Optional)</span></label>
            <input type="text" value={userDetails.insta} onChange={(e)=>{
                const {name,email,phone,youtube} = userDetails;
                setUserDetails({name,email,phone,youtube,insta:e.target.value})
            }}  className='outline-none rounded-lg border-[1px] p-3 mb-8 mx-7' name="" id="" />
            
            <label className='mx-7 mb-1'>Youtube Link <span className='text-[#999CA0]'>(Optional)</span></label>
            <input type="email" value={userDetails.youtube} onChange={(e)=>{
                const {name,email,phone,insta} = userDetails;
                setUserDetails({name,email,phone,insta,youtube:e.target.value})
            }} className='outline-none rounded-lg border-[1px] p-3 mb-8  mx-7'  name="" id="" />
            
            
            <div className='self-end flex items-center'>
            <button className='self-end mr-5 mb-4 border-2 border-[#999CA0]  rounded-lg px-3 py-2' onClick={handleContact} >Back</button>
            <button className='self-end mr-7 mb-4 bg-[#3E84F8] rounded-lg text-white px-3 py-2' onClick={()=>{
                
                dispatch(addUser(userDetails))
                document.getElementById('form').style.display='none'
                setProfile(true)
            }}>Done</button>

            </div>
        </div>
    )
}

export default Contact