import React from "react";
import classes from "./Join.module.css";
const Join = () => {
  return (
    <div className={classes["join-container"]}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veritatis
        quibusdam nisi ut libero
      </p>
      <div className={classes['join-btn']}>
        <button>join now</button>
        <button>contact us</button>
      </div>
    </div>
  );
};

export default Join;
