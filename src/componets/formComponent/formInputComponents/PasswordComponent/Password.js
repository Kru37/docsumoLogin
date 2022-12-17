import React, { useState } from "react";
import styles from "../../Form.module.css";
const Password = (props) => {
  const { password, onChange, error } = props;
  const [showPassword, setShowPassword] = useState(false);
  let path;
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  const handleShowPassword = () => {
    setShowPassword((curr) => !curr);
  };
  if (showPassword) {
    path = (
      <>
        <path
          d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
          stroke="#180C2E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z"
          stroke="#180C2E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </>
    );
  } else {
    path = (
      <>
        <path
          d="M3 3l18 18M10.5 10.677a2 2 0 0 0 2.823 2.823"
          stroke="#180C2E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M7.362 7.561C5.68 8.74 4.279 10.419 3 12c1.889 2.99 5.282 6 9 6 1.55 0 3.043-.523 4.395-1.35M12 6c4.008 0 6.701 3.158 9 6a15.66 15.66 0 0 1-1.078 1.5"
          stroke="#180C2E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </>
    );
  }
  return (
    <div className={styles.form_password}>
      <div className={styles.form_password_wrapper}>
        <label htmlFor="password" className={styles.form_input_label}>
          Password
        </label>
        <div className={styles.form_input_div}>
          <input
            value={password}
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter password here..."
            autoComplete="on"
            onChange={handleChange}
            className={`${styles.form_input_password} ${styles.form_input}`}
          />
          <span
            title={showPassword ? "Hide Password" : "Show Password"}
            className={styles.form_password_show}
            onClick={handleShowPassword}
          >
            <svg width="24" height="24" fill="none">
              {path}
            </svg>
          </span>
        </div>
        {error && (
          <div className={styles.form_input_error}>
            <span>Please enter a password</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Password;
