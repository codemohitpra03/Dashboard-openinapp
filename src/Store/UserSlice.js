import {createSlice} from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name:"user",
    initialState:{
        user:{
            isUser:false,
            name:null,
            email:null,
            phone:null,
            insta:null,
            youtube:null
        }
    },
    reducers:{
        addUser:(state,action)=>{
            state.user.isUser=true
            state.user.name=action.payload.name!==''?action.payload.name :null 
            state.user.email=action.payload.email!==''?action.payload.email  :null 
            state.user.phone=action.payload.phone!==''?action.payload.phone  :null 
            state.user.insta=action.payload.insta!==''?action.payload.insta  :null 
            state.user.youtube=action.payload.youtube!==''?action.payload.youtube  :null 
            
        }
    }
})

export const {addUser} = UserSlice.actions;
export default UserSlice.reducer;
