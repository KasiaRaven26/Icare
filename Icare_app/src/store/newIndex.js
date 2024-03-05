import { configureStore } from "@reduxjs/toolkit";
import {
  findAvailableCareGivers,
  availableCareGiversReducer,
} from "./slices/availableCareGiversSlice";
import { userReducer } from './slices/userSlice';
import { addLoggedInUser, loggedInUserReducer } from "./slices/loggedInUserSlice";
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
    loggedInUser: loggedInUserReducer,
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
  authenticated,
  notAuthenticated,
  addLoggedInUser
};

export * from "./thunks/fetchAvailableCareGivers";
export * from "./thunks/fetchMessages";
export * from "./thunks/addUser"

export {
  useFetchContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} from "./apis/contactsApi";
