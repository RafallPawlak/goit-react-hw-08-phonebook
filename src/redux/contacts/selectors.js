// export const selectContacts = state => {
//   if (state === undefined) {
//     return;
//   }
//   return state.contacts.contacts;
// };

// export const selectFilter = state => {
//   if (state === undefined) {
//     return;
//   }
//   return state.contacts.filter
// };

// export const selectLoading = state => {
//   return state.contacts.isLoading;
// };
export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.inputValue;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;