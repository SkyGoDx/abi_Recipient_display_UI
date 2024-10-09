// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import recipientsReducer from './recipientsSlice';

export const store = configureStore({
  reducer: {
    recipients: recipientsReducer,
  },
});
