import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/addContact',
  (nameText, numberText) => {
    return {
      payload: {
        id: nanoid(),
        name: nameText,
        number: numberText,
      },
    };
  }
);

export const delContact = createAction('contacts/deleteContact');
export const setFilter = createAction('filter/setFilter');

export const updateContacts = createAction('contacts/updateContacts');
