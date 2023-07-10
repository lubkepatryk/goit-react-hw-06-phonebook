import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/createReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});