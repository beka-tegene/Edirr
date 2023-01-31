import React from "react";
import classes from "./Reset.module.css";
import logo1 from "../../../img/Subtract.png";
import logo2 from "../../../img/eDirr.png";
import { useState } from "react";
const Reset = () => {
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(newPassword, confirmNewPassword);
  };
  return (
    <div className={classes["reset-container"]}>
      <div className={classes["reset-logo"]}>
        <img src={logo1} alt="logo" />
        <img src={logo2} alt="logo" />
      </div>
      <div className={classes["reset-form"]}>
        <h1>reset password</h1>
        <form className={classes["reset"]} onSubmit={submitHandler}>
          <div className={classes["reset-formControl"]}>
            <label htmlFor="">New password</label>
            <input
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className={classes["reset-formControl"]}>
            <label htmlFor="">Confirm New password</label>
            <input
              type="password"
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </div>
          <div className={classes["reset-btn"]}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className={classes["reset-footer"]}>
        <p>
          &copy;Copyright all reserved by <i> eDirr team </i>
        </p>
      </div>
    </div>
  );
};

export default Reset;
