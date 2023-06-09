import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  data: null,
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
