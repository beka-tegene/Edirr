import React, { useState } from "react";
import classes from "./UpdateBasic.module.css";
import upload from "../../../../img/Upload-Transparent-Background-PNG.png";
import { useDispatch } from "react-redux";
import { updateAction } from "../../../../Store/UpdateSlice";
const UpdateEducation = () => {
  const dispatch = useDispatch();
  const [level, setLevel] = useState();
  const [position, setPosition] = useState();
  const [institution, setInstitution] = useState();
  const [place, setPlace] = useState();
  const [certificate, setCertificate] = useState();
  const [workId, setWorkId] = useState();

  const onCertificateHandler = (e) => {
    console.log(e.target.files[0]);
  };

  const onExperienceHandler = (e) => {
    console.log(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(level + position + institution + place + certificate + workId);
    dispatch(
      updateAction.UpdateProfiles({
        BasicInfo: false,
        Address: false,
        EducationLevel: false,
        MaritalStates: true,
        Emergency: false,
        agreement: false,
      })
    );
  };
  return (
    <div className={classes["basic-container"]}>
      <h1>education/work</h1>
      <form className={classes["basic-form"]} onSubmit={submitHandler}>
        <div className={classes["basic"]}>
          <div className={classes["basic-formControl"]}>
            <label htmlFor="">Education Level</label>
            <input type="text" onChange={(e) => setLevel(e.target.value)} />
          </div>
          <div className={classes["basic-formControl"]}>
            <label htmlFor="">work position</label>
            <input type="text" onChange={(e) => setPosition(e.target.value)} />
          </div>
        </div>
        <div className={classes["basic"]}>
          <div className={classes["basic-formControl"]}>
            <label htmlFor="">name of institution</label>
            <input
              type="text"
              onChange={(e) => setInstitution(e.target.value)}
            />
          </div>
          <div className={classes["basic-formControl"]}>
            <label htmlFor="">work place</label>
            <input type="text" onChange={(e) => setPlace(e.target.value)} />
          </div>
        </div>
        <div className={classes["basic"]}>
          <div className={classes["basic-formControl"]}>
            <label htmlFor="">certificate award year</label>
            <input
              type="text"
              onChange={(e) => setCertificate(e.target.value)}
            />
          </div>
          <div className={classes["basic-formControl"]}>
            <label htmlFor="">work id</label>
            <input type="text" onChange={(e) => setWorkId(e.target.value)} />
          </div>
        </div>
        <div className={classes["basic"]}>
          <div className={classes["basic-upload"]}>
            <label htmlFor="certificate">
              <div>
                <span>please upload</span>
                <span>certificate/degree/</span>
              </div>
              <img src={upload} alt="upload" onChange={onCertificateHandler} />
            </label>
            <input type="file" id="certificate" hidden />
          </div>
          <div className={classes["basic-upload"]}>
            <label htmlFor="id">
              <div>
                <span>please upload</span>
                <span>work experience</span>
              </div>
              <img src={upload} alt="upload" />
            </label>
            <input type="file" id="id" hidden onChange={onExperienceHandler} />
          </div>
        </div>
        <div className={classes["basic-btn"]}>
          <button>Next</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEducation;
