import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Dev Only
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
// Dev only

const contactsApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    // remove when in prod
    fetchFn: async (...args) => {
      console.log(...args);
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      removeContact: builder.mutation({
        invalidatesTags: (result, error, args) => {
          return [{ type: "Contact", id: args.userId }];
        },
        query: (contact) => {
          return {
            url: `/contacts/${contact.id}`,
            method: "DELETE",
          };
        },
      }),
      addContact: builder.mutation({
        invalidatesTags: (result, error, args) => {
          return [{ type: "Contact", id: args.id }];
        },
        query: (user) => {
          return {
            url: "/contacts",
            method: "POST",
            body: {
              userId: user.id,
              contact: user.contact,
              email: user.email,
            },
          };
        },
      }),
      fetchContacts: builder.query({
        providesTags: (result, error, args) => {
          // const tags = result.map((contact) => {
          //   return { type: "Contact", id: contact.id };
          // });
          // console.log(tags)
          
          return [{ type: "Contact", id: args.id }];
        },
        query: (user) => {
          return {
            url: "/contacts/",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} = contactsApi;

export { contactsApi };
