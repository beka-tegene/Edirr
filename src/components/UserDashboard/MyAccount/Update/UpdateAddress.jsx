import React, { useState } from "react";
import classes from "./UpdateBasic.module.css";
import { useDispatch } from "react-redux";
import { updateAction } from "../../../../Store/UpdateSlice";
const UpdateAddress = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState();
  const [subCity, setSubCity] = useState();
  const [wereda, setWereda] = useState();
  const [kebele, setKebele] = useState();
  const [houseNumber, setHouseNumber] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(city + subCity + wereda + kebele + houseNumber + phoneNumber);
    dispatch(
      updateAction.UpdateProfiles({
        BasicInfo: false,
        Address: false,
        EducationLevel: true,
        MaritalStates: false,
        Emergency: false,
        agreement: false,
      })
    );
  };
  return (
    <div className={classes["basic-container"]}>
      <h1>Address</h1>
      <form className={classes["basic-form"]} onSubmit={submitHandler}>
        <div className={classes["basic"]}>
          <div className={classes["basic-formControl"]}>
            <label htmlFor="">City</label>
            <input type="text" onChange={(e) => setCity(e.target.value)} />
          </div>
          <div className={classes["basic-formControl"]}>
            <label htmlFor="">SubCity</label>
            <input type="text" onChange={(e) => setSubCity(e.target.value)} />
          </div>
        </div>
        <div className={classes["basic"]}>
          <div className={classes["basic-formControl"]}>
            <label htmlFor="">wereda</label>
            <input type="text" onChange={(e) => setWereda(e.target.value)} />
          </div>
          <div className={classes["basic-formControl"]}>
            <label htmlFor="">kebele</label>
            <input type="text" onChange={(e) => setKebele(e.target.value)} />
          </div>
        </div>
        <div className={classes["basic"]}>
          <div className={classes["basic-formControl"]}>
            <label htmlFor="">house number</label>
            <input
              type="text"
              onChange={(e) => setHouseNumber(e.target.value)}
            />
          </div>
          <div className={classes["basic-formControl"]}>
            <label htmlFor="">phone number</label>
            <input
              type="tel"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <div className={classes["basic-btn"]}>
          <button>Next</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAddress;
