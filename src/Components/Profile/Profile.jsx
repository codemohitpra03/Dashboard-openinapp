import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import AddProfile from './AddProfile'
const Profile = () => {
    const [user, setUser] = useState({
        isProfile:false
    })
    const userProfile = useSelector((store)=>store.user)
    if(!userProfile.isUser){
        return <AddProfile/>
    }
    {console.log(user,setUser)}
  return (
    <p>Not Rendered</p>
    
  )
}

export default Profile