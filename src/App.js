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
