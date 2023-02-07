import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { filterSlice } from 'features/filter/filterSlice';
import { persistedAuthReducer } from 'features/authentication/authSlice';
import { contactsReducer } from 'features/contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    userCredentials: persistedAuthReducer,
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
