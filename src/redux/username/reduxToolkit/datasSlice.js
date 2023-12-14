// dataSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API Endpoint
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Create Async Thunk
export const fetchDataAsync = createAsyncThunk("data/fetchData", async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.name;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
});

// Create Slice
const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: null,
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        state.loading = "idle";
        state.data = action.payload;
      })
      .addCase(fetchDataAsync.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
