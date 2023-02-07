import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContactsOperation = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      if (error.response.status.toString() === '401') {
        return thunkAPI.rejectWithValue(
          'Your session may have expired, please reload the page.'
        );
      }
      if (error.response.status.toString() === '404') {
        return thunkAPI.rejectWithValue('There is no such user collection.');
      }
      if (error.response.status.toString() === '500') {
        return thunkAPI.rejectWithValue('Server error. Try again later.');
      }
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  }
);

export const addContactOperation = createAsyncThunk(
  'contacts/add',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      if (error.response.status.toString() === '400') {
        return thunkAPI.rejectWithValue('Error creating contact.');
      }
      if (error.response.status.toString() === '401') {
        return thunkAPI.rejectWithValue(
          'Your session may have expired, please reload the page.'
        );
      }
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  }
);

export const deleteContactOperation = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      if (error.response.status.toString() === '401') {
        return thunkAPI.rejectWithValue(
          'Your session may have expired, please reload the page.'
        );
      }
      if (error.response.status.toString() === '404') {
        return thunkAPI.rejectWithValue('There is no such user collection.');
      }
      if (error.response.status.toString() === '500') {
        return thunkAPI.rejectWithValue('Server error. Try again later.');
      }
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  }
);

export const updateContactOperation = createAsyncThunk(
  'contacts/update',
  async ({ contactId, contact }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}`, contact);
      return response.data;
    } catch (error) {
      if (error.response.status.toString() === '400') {
        return thunkAPI.rejectWithValue('Contact update failed.');
      }
      if (error.response.status.toString() === '401') {
        return thunkAPI.rejectWithValue(
          'Your session may have expired, please reload the page.'
        );
      }
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  }
);
