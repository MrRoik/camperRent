import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65d7621827d9a3bc1d7ae651.mockapi.io';

export const fetchAdverts = createAsyncThunk('adverts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/adverts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
