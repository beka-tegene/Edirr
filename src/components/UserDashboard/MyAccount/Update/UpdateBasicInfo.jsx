import React, { useState } from "react";
import classes from "./UpdateBasic.module.css";
import upload from "../../../../img/Upload-Transparent-Background-PNG.png";
import { useDispatch } from "react-redux";
import { updateAction } from "../../../../Store/UpdateSlice";

const UpdateBasicInfo = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [DOB, setDOB] = useState();
  const [nation, setNation] = useState();
  const [gender, setGender] = useState();
  // const [license, setLicense] = useState([]);

  const onFileHandler = (e) => {
    console.log(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(firstName + lastName + DOB + nation + gender);
    dispatch(
      updateAction.UpdateProfiles({
        BasicInfo: false,
        Address: true,
        EducationLevel: false,
        MaritalStates: false,
        Emergency: false,
        agreement:false,
      })
    );
  };
  return (
    <div className={classes["basic-container"]}>
      <h1>Basic Info</h1>
      <form className={classes["basic-form"]} onSubmit={submitHandler}>
        <div className={classes["basic-formControl"]}>
          <label htmlFor="">First name</label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className={classes["basic-formControl"]}>
          <label htmlFor="">last name</label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className={classes["basic"]}>
          <div className={classes["basic-formControl"]}>
            <label htmlFor="">date of birth</label>
            <input type="date" onChange={(e) => setDOB(e.target.value)} />
          </div>
          <div className={classes["basic-formControl"]}>
            <label htmlFor="">nationality</label>
            <select name="" id="" onChange={(e) => setNation(e.target.value)}>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Ethiopia">Ethiopia</option>
            </select>
          </div>
        </div>
        <div className={classes["basic"]}>
          <div className={classes["basic-sex"]}>
            <label htmlFor="sex">sex</label>
            <div className={classes["basic-radio"]}>
              <input
                type="radio"
                name="sex"
                value={"male"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="">male</label>
            </div>
            <div className={classes["basic-radio"]}>
              <input
                type="radio"
                name="sex"
                value={"female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="">female</label>
            </div>
          </div>
          <div className={classes["basic-upload"]}>
            <label htmlFor="id">
              <div>
                <span>please upload</span>
                <span>kebele id /</span>
                <span>passport / driving</span>
                <span>license</span>
              </div>
              <img src={upload} alt="upload" />
            </label>
            <input type="file" id="id" hidden onChange={onFileHandler} />
          </div>
        </div>
        <div className={classes["basic-btn"]}>
          <button>Next</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBasicInfo;
