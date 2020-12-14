import { combineReducers } from "redux";
import listAction from "./listActions";
import { createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contacts: [],
  filter: "",
};

const newContact = (state, action) => [...state, action.payload];

const removeAnyContact = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const items = createReducer(INITIAL_STATE.contacts, {
  [listAction.addContactSuccess]: newContact,
  [listAction.fetchContactSuccess]: (_, action) => action.payload,
  [listAction.removeContactSuccess]: removeAnyContact,
});

const loading = createReducer(false, {
  [listAction.addContactRequest]: () => true,
  [listAction.addContactSuccess]: () => false,
  [listAction.addContactError]: () => false,
  [listAction.fetchContactRequest]: () => true,
  [listAction.fetchContactSuccess]: () => false,
  [listAction.fetchContactError]: () => false,
  [listAction.removeContactRequest]: () => true,
  [listAction.removeContactSuccess]: () => false,
  [listAction.removeContactError]: () => false,
});

const filter = createReducer(INITIAL_STATE.filter, {
  [listAction.filterContact]: (_, action) => action.payload,
});

export default combineReducers({ items, loading, filter });

// const defaultContacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];
