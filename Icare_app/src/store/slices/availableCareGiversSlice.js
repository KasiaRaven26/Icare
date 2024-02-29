import { createSlice } from "@reduxjs/toolkit";
import { fetchAvailableCareGivers } from "../thunks/fetchAvailableCareGivers";

const availableCareGiversSlice = createSlice({
  name: "availableCareGiversSlice",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    findAvailableCareGivers(state, action) {
      state.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAvailableCareGivers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAvailableCareGivers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchAvailableCareGivers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { findAvailableCareGivers } = availableCareGiversSlice.actions;
export const availableCareGiversReducer = availableCareGiversSlice.reducer;
