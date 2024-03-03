import { configureStore } from "@reduxjs/toolkit";
import {
  findAvailableCareGivers,
  availableCareGiversReducer,
} from "./slices/availableCareGiversSlice";
import {
  userReducer,
  updateUser,
  addUser,
  dismountUser,
} from "./slices/userSlice";
import {
  authenticated,
  notAuthenticated,
  authenticatedReducer,
} from "./slices/auth";
import { messagesReducer } from "./slices/messagesSlice";

import { setupListeners } from "@reduxjs/toolkit/query";
import { contactsApi } from "./apis/contactsApi";

const store = configureStore({
  reducer: {
    user: userReducer,
    availableCareGivers: availableCareGiversReducer,
    auth: authenticatedReducer,
    messages: messagesReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(contactsApi.middleware);
  },
});

setupListeners(store.dispatch);

window.store = store;

export {
  store,
  findAvailableCareGivers,
  updateUser,
  addUser,
  dismountUser,
  authenticated,
  notAuthenticated,
};

export * from "./thunks/fetchAvailableCareGivers";
export * from "./thunks/fetchMessages";

export {
  useFetchContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} from "./apis/contactsApi";
