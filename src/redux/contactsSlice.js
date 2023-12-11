import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = false;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // fetchAll() {},
    // addContact() {},
    // deleteContact() {},
    // addContact: {
    //   prepare(name, number) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         name,
    //         number,
    //       },
    //     };
    //   },
    //   reducer(state, action) {
    //     state.items.push(action.payload);
    //   },
    // },
    // deleteContact(state, action) {
    //   return {
    //     ...state,
    //     items: state.items.filter(contact => contact.id !== action.payload),
    //   };
    // },
  },
});

export const { fetchingError, fetchingInProgress, fetchingSuccess } =
  contactsSlice.actions;

// export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
