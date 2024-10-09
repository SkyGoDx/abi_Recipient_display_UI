// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import recipientsReducer from './recipientsSlice';

// Configure the Redux store
export const store = configureStore({
  reducer: {
    recipients: recipientsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
