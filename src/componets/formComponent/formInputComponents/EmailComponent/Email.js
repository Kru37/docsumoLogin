import React from "react";
import styles from "../../Form.module.css";
const Email = (props) => {
  const { email, onChange, error } = props;
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div>
      <label htmlFor="email" className={styles.form_input_label}>
        Work Email
      </label>
      <div className={styles.form_input_div}>
        <input
          value={email}
          type="text"
          name="email"
          id="email"
          placeholder="janedoe@abc.com"
          autoComplete="off"
          onChange={handleChange}
          className={`${styles.form_input_email} ${styles.form_input}`}
        />
      </div>
      {error && (
        <div className={styles.form_input_error}>
          <span>Please enter a valid email address</span>
        </div>
      )}
    </div>
  );
};

export default Email;
