import React, { useState } from "react";
import classes from "./MyAccount.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const MaritalStates = (props) => {
  const [maritalStates, setMaritalStates] = useState(false);

  const maritalStatesHandler = () => {
    setMaritalStates(!maritalStates);
    // setEducationLevel(false);
    // setAddress(false);
    // setBasicInfo(false);
    // setEmergency(false);
  };
  return (
    <>
      {props.MaritalInfo.map((item) => (
        <div className={classes["account-left-info"]}>
          <li onClick={maritalStatesHandler}>
            <span>marital States</span>{" "}
            {maritalStates ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </li>
          {maritalStates && (
            <div className={classes["account-info"]}>
              <div className={classes["account-info-left"]}>
                <span>You Are</span>
                <span>{item.title}</span>
              </div>
              <div className={classes["account-info-left"]}>
                <span>Partner name</span>
                <span>{item.PartnerName}</span>
              </div>
              <div className={classes["account-info-left"]}>
                <span>partner phone number</span>
                <span>{item.PPN}</span>
              </div>
              <div className={classes["account-info-left"]}>
                <span>partner address</span>
                <span>{item.PA}</span>
              </div>
              <div className={classes["account-info-left"]}>
                <span>kid</span>
                <span>{item.kid}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default MaritalStates;
