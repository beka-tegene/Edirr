import React, { useState } from "react";
import classes from "./MyAccount.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const Address = (props) => {
  const [address, setAddress] = useState(false);

  const addressHandler = () => {
    setAddress(!address);
    // setBasicInfo(false);
    // setEducationLevel(false);
    // setMaritalStates(false);
    // setEmergency(false);
  };
  return (
    <>
      {props.AddressInfo.map((item) => (
        <div className={classes["account-left-info"]}>
          <li onClick={addressHandler}>
            <span>address</span>{" "}
            {address ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </li>
          {address && (
            <div className={classes["account-info"]}>
              <div className={classes["account-info-left"]}>
                <span>City </span>
                <span>{item.city}</span>
              </div>
              <div className={classes["account-info-left"]}>
                <span>SubCity / Woreda /Kebele</span>
                <span>
                  {item.subCity} / {item.woreda} / {item.kebele}
                </span>
              </div>
              <div className={classes["account-info-left"]}>
                <span>House Number</span>
                <span>{item.houseNumber}</span>
              </div>
              <div className={classes["account-info-left"]}>
                <span>phone number</span>
                <span>{item.phoneNumber}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Address;
