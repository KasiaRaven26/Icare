import { createSlice, current  } from "@reduxjs/toolkit";

const loggedInUserSlice = createSlice({
  name: "loggedInUser",
  initialState: [],
  reducers: {
    addLoggedInUser(state, action) {
      console.log(state);
      console.log(action.payload)
      state.push(action.payload);
      console.log(current(state));
    },
  },
});

export const { addLoggedInUser } = loggedInUserSlice.actions;
export const loggedInUserReducer = loggedInUserSlice.reducer;
