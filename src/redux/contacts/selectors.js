// src/redux/contacts/selectors.js
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = state => {
  const filter = state.filters.toLowerCase();
  return state.contacts.items.filter(
    c =>
      c.name.toLowerCase().includes(filter) ||
      c.number.toLowerCase().includes(filter)
  );
};
