import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null, // Updated initial state to null instead of an empty array
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    crypto: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { crypto } = detailsSlice.actions;

export default detailsSlice.reducer;
