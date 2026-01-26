import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "../features/registrationSlice";


export default configureStore ({
    reducer:{
        registrations: registrationReducer
    }
})
