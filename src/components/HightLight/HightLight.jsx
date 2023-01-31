import React from 'react'
import classes from "./HightLight.module.css";
import {
  MdOutlineSupervisedUserCircle,
  MdOutlineSchool,
  MdOutlineBusinessCenter,
} from "react-icons/md";
import { BsPlusSquare } from "react-icons/bs";
import {IoCarSharp} from 'react-icons/io5'
const HightLight = () => {
  return (
    <div className={classes["hight-container"]}>
      <div className={classes["hight-light"]}>
        <i>
          <MdOutlineSupervisedUserCircle />
        </i>
        <span>10,026+</span>
        <hr />
        <span>users</span>
      </div>
      <div className={classes["hight-light"]}>
        <i>
          <IoCarSharp />
        </i>
        <span>106+</span>
        <hr />
        <span>assets</span>
      </div>
      <div className={classes["hight-light"]}>
        <i>
          <BsPlusSquare />
        </i>
        <span>1,020+</span>
        <hr />
        <span>health</span>
      </div>
      <div className={classes["hight-light"]}>
        <i>
          <MdOutlineSchool />
        </i>
        <span>6,053+</span>
        <hr />
        <span>Education</span>
      </div>
      <div className={classes["hight-light"]}>
        <i>
          <MdOutlineBusinessCenter />
        </i>
        <span>945+</span>
        <hr />
        <span>start ups</span>
      </div>
    </div>
  );
}

export default HightLight