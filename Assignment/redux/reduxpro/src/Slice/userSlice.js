import { createSlice } from "@reduxjs/toolkit";



export  const userSlice= createSlice({
    name:"user",
    initialState:{
        loading:false,
        user:[],
        error:""
    },
    reducers:{
        userpending:(state,action)=>{
            state.loading =true;
        },
        userFullfield:(state,action)=>{
            state.loading =false
            state.user.push(action.payload)
        },
        userReject:(state,action) =>{
            state.loading =false;
            state.error =action.payload
        }
    },
    extraReducers:(builder)=>{
        builder

       

    }
})

export const {}=userSlice.actions;

export default userSlice.reducer;