import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  registerOperation,
  loginOperation,
  logOutOperation,
  refreshOperation,
} from './auth.apioperations';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token', 'isLogedin'],
};

const authSlice = createSlice({
  name: 'userCredentials',
  initialState: {
    user: {
      name: null,
      email: null,
      password: null,
    },
    token: null,
    isLogedin: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(registerOperation.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerOperation.fulfilled, (state, action) => {
        state.isLogedin = true;
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerOperation.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(loginOperation.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginOperation.fulfilled, (state, action) => {
        state.isLogedin = true;
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginOperation.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(logOutOperation.fulfilled, state => {
        state.isLogedin = false;
        state.error = null;
        state.user = {
          name: null,
          email: null,
          password: null,
        };
        state.token = null;
      })
      .addCase(logOutOperation.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(refreshOperation.pending, state => {
        state.error = null;
      })
      .addCase(refreshOperation.fulfilled, (state, action) => {
        state.isLogedin = true;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(refreshOperation.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
