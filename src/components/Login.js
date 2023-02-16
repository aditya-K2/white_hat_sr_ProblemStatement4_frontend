import React from "react";
import styles from "./Login.module.css"

function Login() {
    return (
        <div className={styles.loginBody}>
          <span className={styles.userName}>Email </span>
          <input type="Enter User Name" />
          <span className={styles.password}> Password </span>
          <input type="Enter Password" />
          <div className={styles.buttonBox}>
            <button className={styles.login}> Login </button>
            <button className={styles.signing}> Sign Up </button>
          </div>
        </div>
    );
}

export default Login;
