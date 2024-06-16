import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = action.payload;
      })
      .addCase(fetchAdverts.rejected, handleRejected),
});

export default { advertsReducer: advertsSlice.reducer };
