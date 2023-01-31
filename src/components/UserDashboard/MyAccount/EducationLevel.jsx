import React, { useState } from "react";
import classes from "./MyAccount.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const EducationLevel = (props) => {
  const [educationLevel, setEducationLevel] = useState(false);

  const educationLevelHandler = () => {
    setEducationLevel(!educationLevel);
    // setAddress(false);
    // setBasicInfo(false);
    // setMaritalStates(false);
    // setEmergency(false);
  };
  return (
    <>
      {props.EducationInfo.map((item) => (
        <div className={classes["account-left-info"]}>
          <li onClick={educationLevelHandler}>
            <span>education Level</span>{" "}
            {educationLevel ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </li>
          {educationLevel && (
            <div className={classes["account-info"]}>
              <div className={classes["account-info-left"]}>
                <span>Education level</span>
                <span>{item.EducationLevels}</span>
              </div>
              <div className={classes["account-info-left"]}>
                <span>name of institute</span>
                <span>{item.NOE}</span>
              </div>
              <div className={classes["account-info-left"]}>
                <span>Certificate awarded year</span>
                <span>{item.CAY}</span>
              </div>
              <div className={classes["account-info-left"]}>
                <span>work position</span>
                <span>{item.workPosition}</span>
              </div>
              <div className={classes["account-info-left"]}>
                <span>work place</span>
                <span>{item.workPlace}</span>
              </div>
              <div className={classes["account-info-left"]}>
                <span>work Id</span>
                <span>{item.workId}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default EducationLevel;
