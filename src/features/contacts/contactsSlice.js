import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsOperation,
  addContactOperation,
  deleteContactOperation,
  updateContactOperation,
} from './contacts.operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isFetchingContact: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsOperation.pending, state => {
        state.isFetchingContact = true;
        state.error = null;
      })
      .addCase(fetchContactsOperation.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isFetchingContact = false;
        state.error = null;
      })
      .addCase(fetchContactsOperation.rejected, (state, action) => {
        state.isFetchingContact = false;
        state.error = action.payload;
      })
      .addCase(addContactOperation.pending, state => {
        state.isFetchingContact = true;
        state.error = null;
      })
      .addCase(addContactOperation.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isFetchingContact = false;
        state.error = null;
      })
      .addCase(addContactOperation.rejected, (state, action) => {
        state.isFetchingContact = false;
        state.error = action.payload;
      })
      .addCase(deleteContactOperation.pending, state => {
        state.isFetchingContact = true;
        state.error = null;
      })
      .addCase(deleteContactOperation.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.isFetchingContact = false;
        state.error = null;
      })
      .addCase(deleteContactOperation.rejected, (state, action) => {
        state.isFetchingContact = false;
        state.error = action.payload;
      })
      .addCase(updateContactOperation.pending, state => {
        state.isFetchingContact = true;
        state.error = null;
      })
      .addCase(updateContactOperation.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items[index].name = action.payload.name;
        state.items[index].number = action.payload.number;
        state.isFetchingContact = false;
        state.error = null;
      })
      .addCase(updateContactOperation.rejected, (state, action) => {
        state.isFetchingContact = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
