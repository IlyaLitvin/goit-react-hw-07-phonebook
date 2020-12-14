import Axios from "axios";
import listActions from "./listActions.js";

const addContact = ({ name, number }) => (dispatch) => {
  dispatch(listActions.addContactRequest());

  Axios.post("http://localhost:2000/contacts", {
    name,
    number,
  })
    .then(({ data }) => {
      dispatch(listActions.addContactSuccess(data));
    })
    .catch((error) => dispatch(listActions.addContactError(error)));
};

const fetchContact = () => (dispatch) => {
  dispatch(listActions.fetchContactRequest());

  Axios.get("http://localhost:2000/contacts")
    .then(({ data }) => {
      dispatch(listActions.fetchContactSuccess(data));
    })
    .catch((error) => dispatch(listActions.fetchContactError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(listActions.removeContactRequest());

  Axios.delete(`http://localhost:2000/contacts/${id}`)
    .then(() => {
      dispatch(listActions.removeContactSuccess(id));
    })
    .catch((error) => dispatch(listActions.removeContactError(error)));
};

export default { addContact, fetchContact, removeContact };
