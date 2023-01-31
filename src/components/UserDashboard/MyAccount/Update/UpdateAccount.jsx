import React from "react";
import classes from "./UpdateAccount.module.css";
import ProfileCard from "../ProfileCard";
import { GiCheckMark } from "react-icons/gi";
import UpdateBasicInfo from "./UpdateBasicInfo";
import UpdateAddress from "./UpdateAddress";
import UpdateEducation from "./UpdateEducation";
import UpdateMarital from "./UpdateMarital";
import UpdateEmergency from "./UpdateEmergency";
import { useSelector } from "react-redux";
import UpdateFinalInfo from "./UpdateFinalInfo";
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
const UpdateAccount = () => {
  const BasicInfo = useSelector((state) => state.updateProfile.BasicInfo);
  const EducationLevel = useSelector(
    (state) => state.updateProfile.EducationLevel
  );
  const MaritalStates = useSelector(
    (state) => state.updateProfile.MaritalStates
  );
  const Address = useSelector((state) => state.updateProfile.Address);
  const Emergency = useSelector((state) => state.updateProfile.Emergency);
  const agreement = useSelector((state) => state.updateProfile.agreement);

  return (
    <div className={classes["account-container"]}>
      <div className={classes["account-center"]}>
        <div className={classes["account-left"]}>
          <div className={classes["account-left-step"]}>
            <div className={classes["account-left-number"]}>1</div>
            <div className={classes["account-left-vr"]}></div>
            <div className={classes["account-left-number"]}>2</div>
            <div className={classes["account-left-vr"]}></div>
            <div className={classes["account-left-number"]}>3</div>
            <div className={classes["account-left-vr"]}></div>
            <div className={classes["account-left-number"]}>4</div>
            <div className={classes["account-left-vr"]}></div>
            <div className={classes["account-left-number"]}>5</div>
            <div className={classes["account-left-vr"]}></div>
            <div className={classes["account-left-number"]}>
              <GiCheckMark />
            </div>
          </div>
          {BasicInfo && <UpdateBasicInfo />}
          {Address && <UpdateAddress />}
          {EducationLevel && <UpdateEducation />}
          {MaritalStates && <UpdateMarital />}
          {Emergency && <UpdateEmergency />}
          {agreement && <UpdateFinalInfo />}
        </div>
        <ProfileCard profileInfo={DUMMY_USERINFO} />
      </div>
    </div>
  );
};

export default UpdateAccount;
