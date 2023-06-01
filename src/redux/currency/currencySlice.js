import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'http://api.coinlayer.com/list?access_key=37934908e28fb487b137f25b6a90dfcc';

export const getCurrencies = createAsyncThunk('currency/getData', async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
});

const initialState = {
  currency: {
    crypto: {},
  },
  isLoading: false,
  error: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrencies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCurrencies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currency = action.payload;
      })
      .addCase(getCurrencies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default currencySlice.reducer;
