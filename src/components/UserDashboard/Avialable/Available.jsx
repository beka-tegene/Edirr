import React, { useState } from "react";
import Assets from "./Assets";
import classes from "./Available.module.css";
import AvailableCard from "./AvailableCard";
import Education from "./Education";
import Events from "./Events";
import Healths from "./Healths";
import StartUps from "./StartUps";
const DUMMY_CREATE_EDIRR = [
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
  {
    EdirrCreator: "abel mulugeta",
    EdirrName: "selam Edirr",
    location: "adiss ababa",
    EdirrType: "start ups",
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
    EdirrType: "event",
    EdirrPayment: 30,
    requestAvailable: "01-10-2023",
    paymentEvery: "week",
    paymentDay: "01-05-2023",
    description:
      "cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards",
  },
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
  {
    EdirrCreator: "abel mulugeta",
    EdirrName: "selam Edirr",
    location: "adiss ababa",
    EdirrType: "start ups",
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
    EdirrType: "event",
    EdirrPayment: 30,
    requestAvailable: "01-10-2023",
    paymentEvery: "week",
    paymentDay: "01-05-2023",
    description:
      "cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards cards",
  },
];
const Available = () => {
  const [available, setAvailable] = useState("1");
  const AllEdirr = () => {
    setAvailable("1");
  };
  const EducationEdirr = () => {
    setAvailable('2');
  };
  const AssetsEdirr = () => {
    setAvailable('3');
  };
  const StartUpsEdirr = () => {
    setAvailable('4');
  };
  const HealthEdirr = () => {
    setAvailable('5');
  };
  const EventsEdirr = () => {
    setAvailable('6');
  };
  const display =
    (available === "1" && (
      <AvailableCard onAvailableCard={DUMMY_CREATE_EDIRR} />
    )) ||
    (available === "2" && <Education onEducation={DUMMY_CREATE_EDIRR} />) ||
    (available === "3" && <Assets onAssets={DUMMY_CREATE_EDIRR} />) ||
    (available === "4" && <StartUps onStartUps={DUMMY_CREATE_EDIRR} />) ||
    (available === "5" && <Healths onHealths={DUMMY_CREATE_EDIRR} />) ||
    (available === "6" && <Events onEvents={DUMMY_CREATE_EDIRR} />);
  return (
    <div className={classes["available-container"]}>
      <div className={classes["available-center"]}>
        <div className={classes["available-header-btn"]}>
          <button onClick={AllEdirr}>
            all <span>3</span>
          </button>
          <button onClick={EducationEdirr}>
            Education <span>1</span>
          </button>
          <button onClick={AssetsEdirr}>
            Assets <span>1</span>
          </button>
          <button onClick={StartUpsEdirr}>
            start ups <span>1</span>
          </button>
          <button onClick={HealthEdirr}>
            health <span>1</span>
          </button>
          <button onClick={EventsEdirr}>
            event <span>1</span>
          </button>
        </div>
        <div>sorted</div>
        {display}
      </div>
    </div>
  );
};

export default Available;
