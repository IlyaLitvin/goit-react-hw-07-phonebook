import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./ErrorNotification.module.css";

const ErrNot = ({ contactAdded }) => {
  return (
    <CSSTransition
      in={contactAdded}
      timeout={250}
      classNames={styles}
      unmountOnExit
    >
      <div className={styles.container}>
        <p className={styles.text}>Contact already declared</p>
      </div>
    </CSSTransition>
  );
};
export default ErrNot;
