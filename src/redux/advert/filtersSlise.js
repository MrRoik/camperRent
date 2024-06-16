import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filterAdverts: (state, action) => {
      return action.payload;
    },
  },
});

const { filterAdverts } = filtersSlice.actions;
export default { filtersReducer: filtersSlice.reducer, filterAdverts };
