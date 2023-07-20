import { addContact, delContact, setFilter, updateContacts } from '../redux/createAction';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const contactsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addContact, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(delContact, (state, action) => {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      state.items.splice(index, 1);
    })
    .addCase(setFilter, (state, action) => {
      state.filter = action.payload;
    })
    .addCase(updateContacts, (state, action) => {
      state.items = action.payload;
    });
});
