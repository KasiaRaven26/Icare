import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
        action.payload.forEach(element => {
            state.push(element)
        });

    },
    removeUser(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    reset(state, action) {
        return [];
    }
  },
});

const availableCareGiversSlice = createSlice({
  name: "availableCareGivers",
  initialState: [],
  reducers: {
    addAvailableCareGivers(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    availableCareGivers: availableCareGiversSlice.reducer,
  },
});

console.log(store.getState());

export { store };

export const { addUser, removeUser, reset } = userSlice.actions;
export const { addAvailableCareGivers } = userSlice.actions;
