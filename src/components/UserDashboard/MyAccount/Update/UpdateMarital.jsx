import React, { useState } from "react";
import classes from "./UpdateBasic.module.css";
import { useDispatch } from "react-redux";
import { updateAction } from "../../../../Store/UpdateSlice";
const UpdateMarital = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [partner, setPartner] = useState();
  const [PPN, setPPN] = useState();
  const [PA, setPA] = useState();
  const [childName, setChildName] = useState();
  const [childGender, setChildGender] = useState();
  const [childAge, setChildAge] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      title + partner + PPN + PA + childName + childGender + childAge
    );
    dispatch(
      updateAction.UpdateProfiles({
        BasicInfo: false,
        Address: false,
        EducationLevel: false,
        MaritalStates: false,
        Emergency: true,
        agreement: false,
      })
    );
  };
  return (
    <div className={classes["basic-container"]}>
      <h1>marital states</h1>
      <form className={classes["basic-form"]} onSubmit={submitHandler}>
        <div className={classes["basic-forms"]}>
          <div className={classes["basic-marital"]}>
            <div className={classes["basic-formControl"]}>
              <label htmlFor="">title</label>
              <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className={classes["basic-formControl"]}>
              <label htmlFor="">partner name</label>
              <input type="text" onChange={(e) => setPartner(e.target.value)} />
            </div>
            <div className={classes["basic-formControl"]}>
              <label htmlFor="">partner phone number</label>
              <input type="tel" onChange={(e) => setPPN(e.target.value)} />
            </div>
            <div className={classes["basic-formControl"]}>
              <label htmlFor="">partner address</label>
              <input type="text" onChange={(e) => setPA(e.target.value)} />
            </div>
          </div>
          <div className={classes["basic-marital"]}>
            <div>
              <label htmlFor="" className="switch">
                {" "}
                kid
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <div>
              <label htmlFor="">child name</label>
              <input
                type="text"
                onChange={(e) => setChildName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">child gender</label>
              <input
                type="text"
                onChange={(e) => setChildGender(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">child Age</label>
              <input
                type="text"
                onChange={(e) => setChildAge(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={classes["basic-btn"]}>
          <button>Next</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMarital;
