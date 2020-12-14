import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import contactsOperation from "../../redux/contactsOperations.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import selectros from "../../redux/selectors";
class ContactList extends Component {
  render() {
    return (
      <TransitionGroup component="ul" className={styles.TaskList}>
        {this.props.list.map((e) => {
          return (
            <CSSTransition key={e.id} timeout={250} classNames={styles}>
              <li className={styles.contactListItem}>
                {e.name} : {e.number}
                <button
                  type="button"
                  onClick={() => this.props.deleteList(e.id)}
                  className={styles.contactListBtn}
                >
                  Удалить
                </button>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  }
}

ContactList.propTypes = {
  deleteList: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  list: selectros.getContactList(state),
});

const mapDispatchToProps = {
  deleteList: contactsOperation.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
