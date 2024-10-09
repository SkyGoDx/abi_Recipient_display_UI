// src/store/recipientsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type
interface RecipientsState {
  recipients: string[];
}

// Define the initial state using the state type
const initialState: RecipientsState = {
  recipients: [], // Holds recipient email addresses or names
};

const recipientsSlice = createSlice({
  name: 'recipients',
  initialState,
  reducers: {
    setRecipients: (state, action: PayloadAction<string[]>) => {
      state.recipients = action.payload;
    },
  },
});

export const { setRecipients } = recipientsSlice.actions;
export default recipientsSlice.reducer;
