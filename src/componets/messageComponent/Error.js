import React from "react";
import styles from "../formComponent/Form.module.css";
import Button from "../UI/buttonComponent/Button";
const Error = (props) => {
  const { error, handleLogout } = props;
  return (
    <div className={styles.form}>
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>{error}</h2>
      <Button onClick={handleLogout}>Try Again</Button>
    </div>
  );
};

export default Error;
