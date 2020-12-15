import { combineReducers } from "redux";
import listAction from "./listActions";
import { createReducer } from "@reduxjs/toolkit";

const newContact = (state, action) => [...state, action.payload];

const removeAnyContact = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const items = createReducer([], {
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

const filter = createReducer("", {
  [listAction.filterContact]: (_, action) => action.payload,
});

export default combineReducers({ items, loading, filter });
