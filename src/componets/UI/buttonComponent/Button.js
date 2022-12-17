import React from "react";
import styles from "./Button.module.css";
const Button = (props) => {
  const { type } = props;
  return (
    <button
      className={styles.button}
      type={type}
      onClick={props.onClick ? props.onClick : null}
    >
      {props.children}
    </button>
  );
};

export default Button;
