import styles from "./App.module.css";
import Form from "./componets/formComponent/Form";
import logo from "../src/assets/img/docsumo-logo.png";
function App() {
  return (
    <div className={styles.App}>
      <div className={styles.main}>
        <div className={styles.main_wrapper}>
          {/* Logo */}
          <div className={styles.logo}>
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          {/* Login Form */}
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
