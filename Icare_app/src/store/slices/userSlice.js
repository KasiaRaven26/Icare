import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    additionalInfo: [],
  },
  reducers: {
    addUser(state, action) {
      state = action.payload;
    },
    updateUser(state, action) {
      state = action.payload;
    },
    dismountUser() {
      return {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        additionalInfo: {},
      };
    },
  },
});

export const { addUser, updateUser, dismountUser} = userSlice.actions;

export const userReducer = userSlice.reducer;