import React from 'react'
import classes from "./MyAccount.module.css";
import profile from "../../../img/pexels-photo-614810.png";
import { MdOutlinePhoneAndroid, MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
const ProfileCard = (props) => {
  return (
    <>
      {props.profileInfo.map((item) => (
        <div className={classes["account-right"]}>
          <div className={classes["account-right-profile"]}>
            <img src={profile} alt="profile" />
          </div>
          <div className={classes["account-right-text"]}>
            <h1>
              {item.firstName}&nbsp;
              {item.lastName}
            </h1>
            <h5>@johnMax</h5>
          </div>
          <div className={classes["account-right-info"]}>
            <div className={classes["account-right-information"]}>
              <div>
                <span>
                  <MdOutlinePhoneAndroid />
                </span>
                <span>Phone</span>
              </div>
              <span>{item.phoneNumber}</span>
            </div>
            <div className={classes["account-right-information"]}>
              <div>
                <span>
                  <MdEmail />
                </span>
                <span>Email</span>
              </div>
              <span>{item.email}</span>
            </div>
          </div>
          <div className={classes["account-right-btn"]}>
            <Link to={"/update-account"}>update profile</Link>
            <Link>delete account</Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProfileCard