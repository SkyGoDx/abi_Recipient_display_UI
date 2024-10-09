// src/store/recipientsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipients: [], // Holds recipient email addresses or names
};

const recipientsSlice = createSlice({
  name: 'recipients',
  initialState,
  reducers: {
    setRecipients: (state, action) => {
      state.recipients = action.payload;
    },
  },
});

export const { setRecipients } = recipientsSlice.actions;
export default recipientsSlice.reducer;
