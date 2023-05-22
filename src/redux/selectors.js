import { createSelector } from '@reduxjs/toolkit';

export const selectorContscts = state => state.contacts;
export const selectorItems = state => state.contacts.items;
export const selectorFilter = state => state.filter;

export const selectorIsLoading = state => state.contacts.isLoading;
export const selectorError = state => state.contacts.error;

export const selectorfilteredContacts = createSelector(
  [selectorItems, selectorFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
