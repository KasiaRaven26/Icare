import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const addUser = createAsyncThunk('users/add', async (user) => {
  const response = await axios.post('http://localhost:3001/users', {
    name: user.name,
  });

  return response.data;
});

export { addUser };
