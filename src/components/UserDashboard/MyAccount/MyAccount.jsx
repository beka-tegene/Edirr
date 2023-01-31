import React from "react";
import classes from "./MyAccount.module.css";

import BasicInfo from "./BasicInfo";
import Address from "./Address";
import EducationLevel from "./EducationLevel";
import MaritalStates from "./MaritalStates";
import Emergency from "./Emergency";
import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";

const DUMMY_USERINFO = [
  {
    id: "e5r45454ere",
    firstName: "john",
    lastName: "max",
    DOB: "26-3-2000",
    nationality: "ethiopia",
    sex: "male",
    email: "johnmax177@gmail.com",

    city: "Adiss ababa",
    subCity: "Lemi Kura",
    woreda: "7",
    kebele: "05",
    houseNumber: "0778",
    phoneNumber: "+251911223344",

    EducationLevels: "BSC",
    NOE: "Adiss ababa university",
    CAY: "20-11-2014",
    workPosition: "Assistant",
    workPlace: "Adiss ababa",
    workId: "NSR/5320/11",

    title: "single",
    PartnerName: "makbel markos",
    PPN: "+251911223355",
    PA: "adiss ababa",
    kid: "no",

    EFN: "Max matt",
    relationship: "father",
    EPN: "+251911223366",
    EA: "hawasa",
  },
];

const MyAccount = () => {
  return (
    <div className={classes["account-container"]}>
      <div className={classes["account-center"]}>
        <div className={classes["account-left"]}>
          <h1>my profile</h1>
          <BasicInfo BasicInformation={DUMMY_USERINFO} />
          <Address AddressInfo={DUMMY_USERINFO} />
          <EducationLevel EducationInfo={DUMMY_USERINFO} />
          <MaritalStates MaritalInfo={DUMMY_USERINFO} />
          <Emergency EmergencyInfo={DUMMY_USERINFO} />
        </div>
        <ProfileCard profileInfo={ DUMMY_USERINFO} />
      </div>
    </div>
  );
};

export default MyAccount;
