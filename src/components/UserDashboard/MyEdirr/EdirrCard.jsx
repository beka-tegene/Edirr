import React from "react";
import classes from "./EdirrCard.module.css";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
const DUMMY_CREATE_EDIRR = [
  {
    EdirrCreator: "abel mulugeta",
    EdirrName: "selam Edirr",
    location: "adiss ababa",
    EdirrType: "assets",
    EdirrPayment: 30,
    requestAvailable: "01-10-2023",
    paymentEvery: "week",
    paymentDay: "01-05-2023",
    description:
      "poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem poem",
  },
  {
    EdirrCreator: "kayel mulugeta",
    EdirrName: "selam Edirr",
    location: "adiss ababa",
    EdirrType: "health",
    EdirrPayment: 30,
    requestAvailable: "01-10-2023",
    paymentEvery: "week",
    paymentDay: "01-05-2023",
    description:
      "cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards",
  },
  {
    EdirrCreator: "adam mulugeta",
    EdirrName: "selam Edirr",
    location: "adiss ababa",
    EdirrType: "education",
    EdirrPayment: 30,
    requestAvailable: "01-10-2023",
    paymentEvery: "week",
    paymentDay: "01-05-2023",
    description:
      "hosts hosts hosts hosts hosts hosts hosts hosts hosts hosts hosts hosts hosts hosts hosts hosts hosts hosts hosts hosts hosts",
  },
];
const EdirrCard = () => {
  return (
    <div className={classes["edir-card"]}>
      {DUMMY_CREATE_EDIRR.map((item, index) => (
        <div className={classes["edirCard-container"]} key={index}>
          <div className={classes["edirCard-header"]}>
            <AiFillDollarCircle />
            <BsThreeDotsVertical />
          </div>
          <div className={classes["edirCard"]}>
            <div className={classes["edirCard-icon"]}>education icon</div>
            <div className={classes["edirCard-text"]}>
              <h4>{item.EdirrType}</h4>
              <p>
                <b>creator : </b>
                <i>{item.EdirrCreator}</i>
              </p>
              <p>
                <b>Edirr name : </b>
                <i>{item.EdirrName}</i>
              </p>
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

export default EdirrCard;
