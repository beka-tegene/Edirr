import React from "react";
import classes from "./CreateEdirr.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoLinkSharp } from "react-icons/io5";
import { ImUserPlus } from "react-icons/im";
const CreateEdirr = (props) => {
  const hiddenHandler = () => {
    props.onHidden();
  };
  return (
    <div className={classes["model-container"]}>
      <div className={classes["backdrop"]} onClick={hiddenHandler}></div>
      <form className={classes["model-card"]}>
        <i className={classes["model-close"]} onClick={hiddenHandler}>
          <AiOutlineCloseCircle />
        </i>
        <div className={classes["model-left"]}>
          <div className={classes["model-header"]}>
            <h3>Create your own eDirr</h3>
            <div className={classes["model-header-icon"]}>
              <div className={classes["model-header-public"]}>
                <input type="checkbox" name="" id="" />
                <span>public</span>
              </div>
              <div className={classes["model-header-invite"]}>
                <i>
                  <ImUserPlus />
                </i>
                <span>invite</span>
              </div>
              <span>
                <IoLinkSharp />
              </span>
            </div>
          </div>
          <div className={classes["model-left-input"]}>
            <div className={classes["model"]}>
              <label htmlFor="">Name of eDirr</label>
              <input type="text" />
            </div>
            <div className={classes["model"]}>
              <label htmlFor="">Location</label>
              <input type="text" />
            </div>
            <div className={classes["model"]}>
              <label htmlFor="">eDirr type</label>
              <select name="" id="">
                <option disabled selected>eDirr Type</option>
                <option value="Education">Education</option>
                <option value="Asses">Asses</option>
                <option value="Start Ups">Start Ups</option>
                <option value="Event">Event</option>
                <option value="Health">Health</option>
              </select>
            </div>
            <div className={classes["model"]}>
              <label htmlFor="">Amount</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className={classes["model-right"]}>
          <div className={classes["model-right-input"]}>
            <div className={classes["model-flex"]}>
              <div className={classes["model"]}>
                <label htmlFor="">Request Available</label>
                <input type="date" />
              </div>
              <div className={classes["model"]}>
                <label htmlFor="">payment every</label>
                <select name="" id="">
                  <option value="">Week</option>
                  <option value="">2 Week</option>
                  <option value="">Month</option>
                  <option value="">Year</option>
                </select>
              </div>
            </div>
            <div className={classes["model"]}>
              <label htmlFor="">payment Day</label>
              <input type="date" />
            </div>
            <div className={classes["model"]}>
              <label htmlFor="">Description</label>
              <textarea name="" id="" cols="30" rows="5"></textarea>
            </div>
            <div className={classes["model-button"]}>
              <div className={classes["model-btn"]}>
                <button type="reset" onClick={hiddenHandler}>
                  Cancel
                </button>
              </div>
              <div className={classes["model-btn"]}>
                <button type="submit">Create</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateEdirr;
