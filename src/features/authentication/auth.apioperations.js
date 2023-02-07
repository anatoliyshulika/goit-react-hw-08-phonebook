import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

function setToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken() {
  axios.defaults.headers.common.Authorization = '';
}

export const registerOperation = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      if (error.response.status.toString() === '400') {
        return thunkAPI.rejectWithValue(
          'User creation error. Try something change.'
        );
      }
      if (error.response.status.toString() === '500') {
        return thunkAPI.rejectWithValue('Server error. Try again later.');
      }
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  }
);

export const loginOperation = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      if (error.response.status.toString() === '400') {
        return thunkAPI.rejectWithValue('Login error. Try something change.');
      }
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  }
);

export const logOutOperation = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/users/logout');
      removeToken();
      return response.data;
    } catch (error) {
      if (error.response.status.toString() === '401') {
        return thunkAPI.rejectWithValue(
          'Your session may have expired, please reload the page.'
        );
      }
      if (error.response.status.toString() === '500') {
        return thunkAPI.rejectWithValue('Server error. Try again later.');
      }
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  }
);

export const refreshOperation = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.userCredentials.token;
    if (!token) {
      return thunkAPI.rejectWithValue();
    }
    setToken(token);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      if (error.response.status.toString() === '401') {
        return thunkAPI.rejectWithValue(
          'Your session may have expired, please reload the page.'
        );
      }
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  }
);
