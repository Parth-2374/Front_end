import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const registerUser = createAsyncThunk(
    'registerUser', async (data, { rejectedWithvalue }) => {
        try {
            const res = await axios.post("http://localhost:3000/user", data)
            const result = await res.data
            return result.data
        } catch (error) {
            return rejectedWithvalue(error)
        }
    }
)

//Login User

// export const loginUser = createAsyncThunk(
//     'loginUser', async ({ email, password }, { rejectWithValue }) => {
//         try {
//             if (!email || !password) {
//                 return rejectWithValue("Please fill all data");
//             }
//             const res = await axios.get(`http://localhost:3000/user?email=${email}`);
//             console.log(res.data);
            

//             if (res.data.length === 0) {
//                 console.error("Email Not Match");
//                 return rejectWithValue("Email Not Match");
//             }
//             const user = res.data[0];
//             if (user.password !== password) {
//                 return rejectWithValue("Password Not Match");
//             }
//             localStorage.setItem("userid", user.id);
//             localStorage.setItem("username", user.name);

//             return user;


//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

export const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        users: "",
        error: ""
    },
    reducers: {
        userPending: (state, action) => {
            state.loading = true;
        },
        userFullfiled: (state, action) => {
            state.loading = false
            state.users.push(action.payload)
        },
        userReject: (state, action) => {
            state.loading = true
            state.error = action.payload

        }
    },
    extraReducers: (builder) => {
        builder

            .addCase(registerUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload)
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = true;
                state.error = action.payload
            })

            //login
            // .addCase(loginUser.pending, (state, action) => {
            //     state.loading = true;
            // })
            // .addCase(loginUser.fulfilled, (state, action) => {
            //     state.loading = false;
            //     state.users = action.payload
            //     console.error("Login Error:", action.payload);
            // })
            // .addCase(loginUser.rejected, (state, action) => {
            //     state.loading = true;
            //     state.error = action.payload
            // })

    }
})

export const { userFullfiled, userPending, userReject } = userSlice.actions

export default userSlice.reducer