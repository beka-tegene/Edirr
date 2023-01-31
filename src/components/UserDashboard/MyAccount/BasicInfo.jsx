import React, { useState } from "react";
import classes from "./MyAccount.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const BasicInfo = (props) => {
  const [basicInfo, setBasicInfo] = useState(true);

  const basicInfoHandler = () => {
    setBasicInfo(!basicInfo);
    //   setAddress(false);
    //   setEducationLevel(false);
    //   setMaritalStates(false);
    //   setEmergency(false);
  };
  return (
    <>
      {props.BasicInformation.map((item) => (
        <div className={classes["account-left-info"]}>
          <li onClick={basicInfoHandler}>
            <span>basic info</span>{" "}
            {basicInfo ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </li>
          {basicInfo && (
            <div className={classes["account-info"]}>
              <div className={classes["account-info-left"]}>
                <span>full name</span>
                <span>
                  {item.firstName} {item.lastName}
                </span>
              </div>
              <div className={classes["account-info-left"]}>
                <span>date of birth</span>
                <span>{item.DOB}</span>
              </div>
              <div className={classes["account-info-left"]}>
                <span>Nationality</span>
                <span>{item.nationality}</span>
              </div>
              <div className={classes["account-info-left"]}>
                <span>sex</span>
                <span>{item.sex}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default BasicInfo;
