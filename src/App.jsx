import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRecipients } from './store/recipientsSlice';
import RecipientsDisplay from './components/RecipientsDisplay';
import './index.css'

const App = () => {
  const dispatch = useDispatch();

  // Mock data with email addresses
  const mockRecipients = [
    'alice@example.com',
    'bob@example.com',
    'carol@example.com',
    'dave@example.com',
    'eve@example.com',
    'frank@example.com',
  ];

  useEffect(() => {
    // Set the mock recipients data in the Redux store
    dispatch(setRecipients(mockRecipients));
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <RecipientsDisplay />
    </div>
  );
};

export default App;
