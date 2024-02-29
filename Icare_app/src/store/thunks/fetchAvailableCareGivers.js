import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchAvailableCareGivers = createAsyncThunk(
  "availableCareGivers/fetch",
  async () => {
    const response = await axios.get(
      "http://localhost:3001/availableCareGivers"
    );
    /// Dev only
    await pause(3000);
    return response.data;
  }
);

// For dev only
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchAvailableCareGivers };
