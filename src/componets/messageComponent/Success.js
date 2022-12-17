import React from "react";
import styles from "../formComponent/Form.module.css";
import Button from "../UI/buttonComponent/Button";
const Success = (props) => {
  const { fullName, handleLogout } = props;
  return (
    <div className={styles.form}>
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
        Hello {fullName}
      </h2>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Success;
