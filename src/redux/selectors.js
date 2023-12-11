// import { createSelector } from '@reduxjs/toolkit';

// export const selectContacts = createSelector(state => state.contacts.items);

// export const selectFilter = createSelector(state => state.filter);

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;
