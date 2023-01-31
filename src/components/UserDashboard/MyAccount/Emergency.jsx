import React, { useState } from "react";
import classes from "./MyAccount.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const Emergency = (props) => {
  const [emergency, setEmergency] = useState(false);

  const emergencyHandler = () => {
    setEmergency(!emergency);
    // setMaritalStates(false);
    // setEducationLevel(false);
    // setAddress(false);
    // setBasicInfo(false);
  };
  return (
    <>
      {props.EmergencyInfo.map((item) => (
        <div className={classes["account-left-info"]}>
          <li onClick={emergencyHandler}>
            <span>emergency</span>{" "}
            {emergency ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </li>
          {emergency && (
            <div className={classes["account-info"]}>
              <div className={classes["account-info-left"]}>
                <span>Emergency Full Name</span>
                <span>{item.EFN}</span>
              </div>
              <div className={classes["account-info-left"]}>
                <span>relationship</span>
                <span>{item.relationship}</span>
              </div>
              <div className={classes["account-info-left"]}>
                <span>Emergency phone number</span>
                <span>{item.EPN}</span>
              </div>
              <div className={classes["account-info-left"]}>
                <span>emergency address</span>
                <span>{item.EA}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Emergency;
