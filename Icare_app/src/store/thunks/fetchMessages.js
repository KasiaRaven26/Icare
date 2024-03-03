import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchMessages = createAsyncThunk("messages/fetch", async () => {
  const response = await axios.get("http://localhost:3001/messages");
  await pause(2000);
  return response.data;
});

// For dev only
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchMessages };
