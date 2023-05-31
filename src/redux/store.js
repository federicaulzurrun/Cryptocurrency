import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './currency/currencySlice';
import detailsReducer from './details/detailsSlice';

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    details: detailsReducer,
  },
});

export default store;
