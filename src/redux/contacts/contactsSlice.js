import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { fetchContacts, addContacts, removeContact } from './operations';

const initialState = [];

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: initialState, isLoading: false, error: null },
  // reducers: {
  //   sortContactsAz: state => {
  //     state.items.sort((a, b) => {
  //       return a.name.localeCompare(b.name);
  //     });
  //   },
  //   sortContactsAzReverse: state => {
  //     state.items.sort((a, b) => {
  //       return b.name.localeCompare(a.name);
  //     });
  //   },
  // },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContacts.pending]: handlePending,
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContacts.rejected]: handleRejected,
    [removeContact.pending]: handlePending,
    [removeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === action.payload.id);
      state.items.splice(index, 1);
    },
    [removeContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;