import React, { useState } from "react";
import classes from "./UpdateBasic.module.css";
import { useDispatch } from "react-redux";
import { updateAction } from "../../../../Store/UpdateSlice";
const UpdateEmergency = () => {
  const dispatch = useDispatch();
  const [emergency, setEmergency] = useState();
  const [relationship, setRelationship] = useState();
  const [EPN, setEPN] = useState();
  const [EA, setEA] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(emergency + relationship + EPN + EA);
    dispatch(
      updateAction.UpdateProfiles({
        BasicInfo: false,
        Address: false,
        EducationLevel: false,
        MaritalStates: false,
        Emergency: false,
        agreement: true,
      })
    );
  };
  return (
    <div className={classes["basic-container"]}>
      <h1>emergency contact</h1>
      <form onSubmit={submitHandler}>
        <div className={classes["basic-form"]}>
          <div className={classes["basic-formControl"]}>
            <label htmlFor="">full name</label>
            <input type="text" onChange={(e) => setEmergency(e.target.value)} />
          </div>
          <div className={classes["basic-formControl"]}>
            <label htmlFor="">relationship</label>
            <input
              type="text"
              onChange={(e) => setRelationship(e.target.value)}
            />
          </div>
          <div className={classes["basic-formControl"]}>
            <label htmlFor="">emergency phone number</label>
            <input type="tel" onChange={(e) => setEPN(e.target.value)} />
          </div>
          <div className={classes["basic-formControl"]}>
            <label htmlFor="">emergency address</label>
            <input type="text" onChange={(e) => setEA(e.target.value)} />
          </div>
        </div>
        <div className={classes["basic-btn"]}>
          <button>Next</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEmergency;
