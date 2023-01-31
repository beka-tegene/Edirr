import React from "react";
import { Link } from "react-router-dom";
import classes from "./UserDashboard.module.css";
import bg from "../../../img/bg 1.png";
const UserDashboard = (props) => {
  const createHandler = () => {
    props.onCreate()
  };
  return (
    <div className={classes["dashboard-container"]}>
      <img src={bg} alt="bg" />
      <div className={classes["dashboard-center"]}>
        <h1>You don't have any eDirr? Now!!</h1>
        <Link to={"/available-edirr"}>Join Now</Link>
        <Link onClick={createHandler}>Create eDirr</Link>
      </div>
    </div>
  );
};

export default UserDashboard;
