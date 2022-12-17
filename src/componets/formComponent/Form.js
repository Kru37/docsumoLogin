import React, { useCallback, useEffect, useReducer, useState } from "react";
import Button from "../UI/buttonComponent/Button";
import Email from "./formInputComponents/EmailComponent/Email";
import Password from "./formInputComponents/PasswordComponent/Password";
import styles from "./Form.module.css";
import { emailReducer, passwordReducer } from "./reducers/formReducer";
import Success from "../messageComponent/Success";
import Error from "../messageComponent/Error";

// Regex to check email
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const Form = () => {
  // Email state Management
  const [emailInput, dispatchEmailFn] = useReducer(emailReducer, {
    value: "",
    error: false,
  });
  // Password state Management
  const [passwordInput, dispatchPasswordFn] = useReducer(passwordReducer, {
    value: "",
    error: false,
  });
  //FormValidity state and login Data
  const [formValid, setFormValid] = useState(false);
  const [loginData, setloginData] = useState({
    status: "",
    error: "",
    fullName: "",
  });
  // Password and email change handlers
  const handleEmailChange = (value) => {
    dispatchEmailFn({ type: "setEmail", payload: value });
    dispatchEmailFn({ type: "setError", payload: false });
  };
  const handlePasswordChange = (value) => {
    dispatchPasswordFn({ type: "setPassword", payload: value });
    dispatchPasswordFn({ type: "setError", payload: false });
  };
  //Email validity check Fn
  const checkEmailValidity = () => {
    if (
      emailInput.value.trim().length === 0 ||
      !emailRegex.test(emailInput.value)
    ) {
      dispatchEmailFn({ type: "setError", payload: true });
      return false;
    } else {
      return true;
    }
  };
  //Password validity check Fn
  const checkPasswordValidity = () => {
    if (passwordInput.value.trim().length === 0) {
      dispatchPasswordFn({ type: "setError", payload: true });
      return false;
    } else {
      return true;
    }
  };

  //Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValid = checkEmailValidity();
    const passwordValid = checkPasswordValidity();
    if (emailValid && passwordValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  //Fetch user data Fn
  const handleLogin = useCallback(async () => {
    const body = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    try {
      const response = await fetch(
        "https://apptesting.docsumo.com/api/v1/eevee/login/",
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);

      setloginData({
        status: data.status,
        error: data.error,
        fullName: data.data?.user["full_name"],
      });
      dispatchEmailFn({ type: "clearEmail" });
      dispatchPasswordFn({ type: "clearPassword" });
    } catch (err) {
      console.log("error", err);
    }
  }, [emailInput.value, passwordInput.value]);

  //to call handle login
  useEffect(() => {
    if (formValid) {
      handleLogin();
      setFormValid(false);
    }
  }, [formValid, handleLogin]);
  const handleLogout = () => {
    setloginData({
      status: "",
      error: "",
      fullName: "",
    });
  };

  //show result
  if (loginData.status === "success") {
    return (
      <Success fullName={loginData.fullName} handleLogout={handleLogout} />
    );
  }
  if (loginData.status === "fail") {
    return <Error error={loginData.error} handleLogout={handleLogout} />;
  }

  return (
    <div className={styles.form}>
      <h1 className={styles.form_heading}>Login to your Docsumo account</h1>
      <form className={styles.form_body} onSubmit={handleSubmit}>
        {/* Email Input Component */}
        <Email
          email={emailInput.value}
          onChange={handleEmailChange}
          error={emailInput.error}
        />
        {/* Password Input Component */}
        <Password
          password={passwordInput.value}
          onChange={handlePasswordChange}
          error={passwordInput.error}
        />
        {/* Forgot password link */}
        <div className={styles.form_forgotpassword}>
          <a href="#" title="Forgot Password?">
            Forgot password?
          </a>
        </div>
        {/* Submit Button */}
        <div className={styles.form_button}>
          <Button type="submit">Login</Button>
        </div>
      </form>
      {/* Sign up link */}
      <div className={styles.form_signup}>
        <span>Don't have an account?</span>
        <a href="#">Sign Up</a>
      </div>
    </div>
  );
};

export default Form;
