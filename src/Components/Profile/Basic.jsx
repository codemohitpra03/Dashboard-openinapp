const Basic = ({changeLayout,userDetails,setUserDetails}) =>{
    const handleBasic = ()=>{
        
        if(userDetails.name.trim()!=='' && userDetails.email.trim()!=='' &&userDetails.phone.trim()!=='' ){
            changeLayout(false)
        }else{
            alert("Please Fill the required fields")
        }
    }
    return (
        <div className='flex flex-col'>
            <label className='mx-7 mb-1'>Enter Name <sup>*</sup></label>
            <input type="text" value={userDetails.name} onChange={(e)=>{
                const {email,phone,insta,youtube} = userDetails;
                setUserDetails({email,phone,insta,youtube,name:e.target.value})
            }} placeholder='Eg. John Doe'  className='outline-none rounded-lg border-[1px] p-3 mb-8 mx-7' name="" id="" />
            
            <label className='mx-7 mb-1'>Enter Email <sup>*</sup></label>
            <input type="email"  value={userDetails.email} onChange={(e)=>{
                const {name,phone,insta,youtube} = userDetails
                setUserDetails({name,phone,insta,youtube,email:e.target.value})
            }} placeholder='Eg. John@xyz.com' className='outline-none rounded-lg border-[1px] p-3 mb-8  mx-7'  name="" id="" />
            
            <label className='mx-7 mb-1'>Enter Phone <sup>*</sup></label>
            <input type="tel" value={userDetails.phone} onChange={(e)=>{
                const {name,email,insta,youtube} = userDetails
                setUserDetails({name,email,insta,youtube,phone:e.target.value})
            }} placeholder='Eg.  9123456789'  className='outline-none rounded-lg border-[1px] p-3 mb-8  mx-7' name="" id="" />

            <button className='self-end mx-7 mb-4 bg-[#3E84F8] rounded-lg text-white px-3 py-2' onClick={handleBasic}>Next</button>
        </div>
    )
}

export default Basic