import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import styles from "./App.module.css";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import contactOperations from "./redux/contactsOperations";
import selectors from "./redux/selectors";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContact();
  }

  render() {
    return (
      <>
        {this.props.isLoading && <h1>Loading...</h1>}
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={styles}
          unmountOnExit
        >
          <h1 className={styles.title}>Phonebook</h1>
        </CSSTransition>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: selectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContact: contactOperations.fetchContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// componentDidMount() {
//   const localList = localStorage.getItem("contacts");
//   if (localList) {
//     this.setState({ contacts: JSON.parse(localList) });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (prevState.contacts !== this.state.contacts) {
//     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//   }
// }

// toAddContact = (el) => {
//   const { contacts } = this.state;
//   const rule = contacts.some((contact) => contact.name === el.name);
//   if (rule) {
//     this.setState({ contactAdded: true });
//     setTimeout(() => this.setState({ contactAdded: false }), 2000);
//     return;
//   } else if (el.name.length >= 1) {
//     this.setState((prev) => {
//       const updateState = [...prev.contacts, el];
//       return { contacts: updateState };
//     });
//   }
// };

// filterRender = (filter) => {
//   this.setState({ filter });
// };

// filtresTask() {
//   const { contacts, filter } = this.state;
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// }

// toDeleteContact = (id) => {
//   const { contacts } = this.state;
//   const obj = contacts.find((el) => el.id === id);
//   const index = contacts.indexOf(obj);
//   this.setState((prevState) => ({
//     contacts: [
//       ...prevState.contacts.slice(0, index),
//       ...prevState.contacts.slice(index + 1),
//     ],
//   }));
// };
