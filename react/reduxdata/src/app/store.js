import { configureStore } from "@reduxjs/toolkit";
import  countSlice  from "../features/counterSlice";
import todoSlice from "../features/Todo/todoSlice";



export default configureStore({
    reducer:{
        counter : countSlice ,
        todos : todoSlice
    }
})