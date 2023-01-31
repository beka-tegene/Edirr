import React, { useState } from "react";
import EdirrCard from "./EdirrCard";
import HostEdirrCard from "./HostEdirrCard";
import classes from "./MyEdirr.module.css";

const MyEdirr = () => {
  const [JoinedEdirr, setJoinedEdirr] = useState(false);
  const JoinedHandler = () => {
    setJoinedEdirr(false);
  };
  const hostedHandler = () => {
    setJoinedEdirr(true);
  };
  return (
    <div className={classes["edirr-container"]}>
      <div className={classes["edirr-center"]}>
        <div className={classes["edirr-header-btn"]}>
          <button onClick={JoinedHandler}>
            joined <span>3</span>
          </button>
          <button onClick={hostedHandler}>
            hosted <span>1</span>
          </button>
        </div>
        <div>sorted</div>
        {!JoinedEdirr && <EdirrCard />}
        {JoinedEdirr && <HostEdirrCard />}
      </div>
    </div>
  );
};

export default MyEdirr;
