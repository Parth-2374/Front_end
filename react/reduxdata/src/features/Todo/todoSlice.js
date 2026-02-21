import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: ["ABC", "XYZ"]
}


export const    todoslice = createSlice({
    name: "Todos",
    initialState,
    reducers:{
        AddData:(state,actions)=>{
            state.todo.push(actions.payload)
        }

    }

})

export const {AddData} =todoslice.actions

export default todoslice.reducer;