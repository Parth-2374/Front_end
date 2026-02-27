import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

// Read
export const readproduct = createAsyncThunk(
    'readproduct', async (data, { rejectedWithValue }) => {
        try {
            const res = await axios.get("http://localhost:3000/products")
            const result = await res.data
            return result
        } catch (error) {
            return rejectedWithValue(error)
        }
    }
)
// Add
export const addproduct = createAsyncThunk(
    'addproduct', async (data, { rejectedWithValue }) => {
        try {
            const res = await axios.post(`http://localhost:3000/products`, data)
            const result = await res.data
            return result
        } catch (error) {
            return rejectedWithValue(error)
        }
    }
)
// Delete
export const deleteproduct = createAsyncThunk(
    'deleteproduct', async (data, { rejectedWithValue }) => {
        try {
            const res = await axios.delete(`http://localhost:3000/products/${data}`)
            const result = await res.data
            return result
        } catch (error) {
            return rejectedWithValue(error)
        }
    }
)

//Update
export const updateproduct = createAsyncThunk(
    'updateproduct', async (data, { rejectedWithValue }) => {
        try {
            const res = await axios.put(`http://localhost:3000/products/${data.id}`, data)
            const result = await res.data
            return result
        } catch (error) {
            return rejectedWithValue(error)
        }
    }
)
export const productSlice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        products: [],
        error: ""
    },
    reducers: {
        productPending: (state, action) => {
            state.loading = true
        },
        productFulfilled: (state, action) => {
            state.loading = false;
            state.products.push(action.payload)
        },
        productRejected: (state, action) => {
            state.loading = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(readproduct.pending, (state, action) => {
                state.loading = true
            })
            .addCase(readproduct.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            })
            .addCase(readproduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            //Add
            .addCase(addproduct.pending, (state, action) => {
                state.loading = true
            })
            .addCase(addproduct.fulfilled, (state, action) => {
                state.loading = false
                state.products.push(action.payload)
            })
            .addCase(addproduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // Delete
            .addCase(deleteproduct.pending, (state, action) => {
                state.loading = true
            })
            .addCase(deleteproduct.fulfilled, (state, action) => {
                state.loading = false
                state.products = state.products.filter((data, index) => index != action.payload)
            })
            .addCase(deleteproduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            //Update
            .addCase(updateproduct.pending, (state, action) => {
                state.loading = true
            })
            .addCase(updateproduct.fulfilled, (state, action) => {
                state.loading = false
                const index = state.products.findIndex((item) => item.id === action.payload.id)
                state.products[index] = action.payload
            })
            .addCase(updateproduct.rejected,(state,action)=>{
                state.error=false
                state.error =action.payload
            })
       
    }

})


export const { productFulfilled, productPending, productRejected } = productSlice.actions;

export default productSlice.reducer