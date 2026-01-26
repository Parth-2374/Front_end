import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:3000/registrations";

export const fetchRegistrations = createAsyncThunk(
  "registrations/fetch",
  async () => {
    const res = await axios.get(API);
    return res.data;
  }
);

export const addRegistration = createAsyncThunk(
  "registrations/add",
  async (data) => {
    const res = await axios.post(API, data);
    return res.data;
  }
);

export const deleteRegistration = createAsyncThunk(
  "registrations/delete",
  async (id) => {
    await axios.delete(`${API}/${id}`);
    return id;
  }
);

export const updateRegistration = createAsyncThunk(
  "registrations/update",
  async (data) => {
    const res = await axios.put(`${API}/${data.id}`, data);
    return res.data;
  }
);

const registrationSlice = createSlice({
  name: "registrations",
  initialState: {
    list: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegistrations.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addRegistration.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteRegistration.fulfilled, (state, action) => {
        state.list = state.list.filter(r => r.id !== action.payload);
      })
      .addCase(updateRegistration.fulfilled, (state, action) => {
        const i = state.list.findIndex(r => r.id === action.payload.id);
        state.list[i] = action.payload;
      });
  }
});

export default registrationSlice.reducer;
