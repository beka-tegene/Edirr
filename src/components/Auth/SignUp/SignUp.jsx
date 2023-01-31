import React from 'react'
import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";
const SignUp = () => {
  return (
    <div className={classes["sign-container"]}>
      <div className={classes["sign"]}>
        <h1 className={classes["sign-h1"]}>Sign Up</h1>
        <h4 className={classes["sign-h4"]}>Hello! Register to get started</h4>
        <form className={classes["sign-form"]}>
          <div className={classes["form-control"]}>
            <label htmlFor="">user name</label>
            <input type={"text"} />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="">full name</label>
            <input type={"text"} />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="">Phone number</label>
            <input type={"tel"} />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="">Email</label>
            <input type={"email"} />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="">Password</label>
            <input type={"password"} />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="">Confirm Password</label>
            <input type={"password"} />
          </div>
          <div className={classes["form-controls"]}>
            <input type={"checkbox"} />
            <span>
              By continuing, you agree to our{" "}
              <Link to={"/"}>Terms of Serves</Link>
            </span>
          </div>
          <div className={classes["sign-btn"]}>
            <button>sign up</button>
          </div>
        </form>
        <p className={classes["sign-p"]}>
          Already have an account? <Link to={"/login"}>Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp