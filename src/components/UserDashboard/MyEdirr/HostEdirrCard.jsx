import React from "react";
import classes from "./EdirrCard.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
const DUMMY_CREATE_EDIRR = [
  {
    EdirrName: "selam Edirr",
    location: "adiss ababa",
    EdirrType: "assets",
    EdirrPayment: 30,
    requestAvailable: "01-10-2023",
    paymentEvery: "week",
    paymentDay: "01-05-2023",
    description:
      "poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem",
  }
];
const HostEdirrCard = () => {
  return (
    <div className={classes["edir-card"]}>
      {DUMMY_CREATE_EDIRR.map((item, index) => (
        <div className={classes["edirCard-container"]} key={index}>
          <div className={classes["edirCard-header"]}>
            <BsThreeDotsVertical />
          </div>
          <div className={classes["edirCard"]}>
            <div className={classes["edirCard-icon"]}>education icon</div>
            <div className={classes["edirCard-text"]}>
              <h4>{item.EdirrType}</h4>
              <p>
                <b>Edirr name : </b>
                <i>{item.EdirrName}</i>
                <p>
                  <b>location : </b>
                  <i>{item.location}</i>
                </p>
                <p>
                  <b>Edirr type : </b>
                  <i>{item.EdirrType}</i>
                </p>
                <p>
                  <b>request available : </b>
                  <i>{item.requestAvailable}</i>
                </p>
                <p>
                  <b>payment every : </b>
                  <i>{item.paymentEvery}</i>
                </p>
                <p>
                  <b>payment day : </b>
                  <i>{item.paymentDay}</i>
                </p>
                <p>
                  <b>description : </b>
                  <i>{item.description}</i>
                </p>
              </p>
            </div>
          </div>
          <div className={classes["edirCard-btn"]}>
            <button>show detail</button>
          </div>
          <div className={classes["edirCard-blur"]}></div>
          <div className={classes["edirCard-blur"]}></div>
        </div>
      ))}
    </div>
  );
};

export default HostEdirrCard;
