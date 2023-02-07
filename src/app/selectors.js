import { createSelector } from '@reduxjs/toolkit';
export const selectFilter = state => state.filter.value;
export const selectUser = state => state.userCredentials.user;
export const selectIsLogedin = state => state.userCredentials.isLogedin;
export const selectIsRefreshing = state => state.userCredentials.isRefreshing;
export const selectToken = state => state.userCredentials.token;
export const selectError = state => state.userCredentials.error;
export const selectIsLoading = state => state.userCredentials.isLoading;
export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, searchFilter) => {
    const normalizeFilterText = searchFilter.toLowerCase();

    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilterText)
    );
  }
);
