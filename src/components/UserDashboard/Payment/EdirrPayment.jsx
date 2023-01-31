import React from "react";
import classes from "./EdirrPayment.module.css";
import paypal from "../../../img/Paypal_2014_logo.png";
import bank from "../../../img/2830284.png";
import teleBirr from "../../../img/telebirr.jpg";
import visa from "../../../img/card.png";
import paypalIcon from "../../../img/paypal 1 1.png";
const EdirrPayment = () => {
  return (
    <div className={classes["payment-container"]}>
      <div className={classes["payment-center"]}>
        <button className={classes["payment-btn"]}>
          <img src={paypal} alt="paypal" />
        </button>
        <button className={classes["payment-btn"]}>
          <img src={bank} alt="bank" />
        </button>
        <button className={classes["payment-btn"]}>
          <img src={teleBirr} alt="TeleBirr" />
        </button>
        <button className={classes["payment-btn"]}>
          <img src={visa} alt="visa" />
        </button>
        <div>
          <img src={paypalIcon} alt="paypal" />
          <div>
            <h3>lorem lorem lorem</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem nemo
              quam amet maxime
            </p>
          </div>
          <div>
            <label htmlFor="">eDirr Name</label>
            <select name="" id="">
              <option value="">sefere genet</option>
              <option value="">sefere genet</option>
              <option value="">sefere genet</option>
              <option value="">sefere genet</option>
            </select>
            <label htmlFor="">total amount to be paid</label>
            <input type="number" name="" id="" />
          </div>
        </div>
        <form action="" method="post">
          <div>
            <h3>Log in to Paypal</h3>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" />
          </div>
          <div>
            <label htmlFor="">password</label>
            <input type="password" name="" id="" />
          </div>
          <div>
            <button>Confirm payment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EdirrPayment;
