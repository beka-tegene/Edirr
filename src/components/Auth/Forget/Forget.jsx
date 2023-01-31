import React from "react";
import { Link } from "react-router-dom";
import classes from "./Forget.module.css";
const Forget = () => {
  return (
    <div className={classes["login-container"]}>
      <div className={classes["login"]}>
        <h1 className={classes["login-h1"]}>Forget password</h1>
        <h1 className={classes["login-h4"]}>
          Welcome back! Glad to see you,Again!
        </h1>
        <form className={classes["login-form"]}>
          <div className={classes["form-control"]}>
            <label htmlFor="username">user name</label>
            <input type={"text"} id="username" autoComplete={"off"} required />
          </div>

          <div className={classes["login-btn"]}>
            <button>resat my password</button>
          </div>
        </form>
        <p className={classes["login-p"]}>
          Already have an account? <Link to={"/login"}>Sign in</Link>
          <br />
          <br />
          Don't have an account? <Link to={"/register"}>Sign Up Now</Link>
        </p>
      </div>
    </div>
  );
};

export default Forget;
