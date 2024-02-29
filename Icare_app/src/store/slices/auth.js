import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContent = createAsyncThunk("auth/fetchContent", async () => {
  const res = await axios.get("http://localhost:3001/users");
  const data = res.data;
  return data;
});

export const registerUser = createAsyncThunk(
  "auth/register",
  async (content) => {
    const res = await axios.post(
      "http://localhost:3001/login",
      JSON.stringify(content),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    const data = await res.data;
    return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    authenticated(state, action) {
      state = action.payload;
    },
    notAuthenticated(state, action) {
      return {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { authenticated, notAuthenticated } = authSlice.actions;
export const authenticatedReducer = authSlice.reducer;
