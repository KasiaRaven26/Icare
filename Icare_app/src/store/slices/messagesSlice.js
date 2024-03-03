import {createSlice} from "@reduxjs/toolkit";
import {fetchMessages} from "../thunks/fetchMessages"

const messagesSlice = createSlice({
    name: "messagesSlice",
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchMessages.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(fetchMessages.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchMessages.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
});

export const messagesReducer = messagesSlice.reducer;