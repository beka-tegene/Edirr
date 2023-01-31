import React from "react";
import classes from "./Service.module.css";
const Service = () => {
  return (
    <div className={classes["service-container"]} id='service'>
      <div className={classes["service-blur"]}></div>
      <h1 className={classes["service-header"]}>Services</h1>
      <div className={classes["service"]}>
        <div className={classes["service-card"]}>
          <h2>health insurance</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis sunt nam saepe architecto, rem quibusdam quis tempora,
            vel expedita harum odio repellat a possimus praesentium accusantium
            quisquam suscipit quasi labore.
          </p>
          <button>Learn more</button>
        </div>
        <div className={classes["service-card"]}>
          <h2>Education</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis sunt nam saepe architecto, rem quibusdam quis tempora,
            vel expedita harum odio repellat a possimus praesentium accusantium
            quisquam suscipit quasi labore.
          </p>
          <button>Learn more</button>
        </div>
        <div className={classes["service-card"]}>
          <h2>Assets</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis sunt nam saepe architecto, rem quibusdam quis tempora,
            vel expedita harum odio repellat a possimus praesentium accusantium
            quisquam suscipit quasi labore.
          </p>
          <button>Learn more</button>
        </div>
        <div className={classes["service-card"]}>
          <h2>Start ups</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis sunt nam saepe architecto, rem quibusdam quis tempora,
            vel expedita harum odio repellat a possimus praesentium accusantium
            quisquam suscipit quasi labore.
          </p>
          <button>Learn more</button>
        </div>
      </div>
      <div className={classes["service-hr"]}></div>
      <div className={classes["service-vr"]}></div>
    </div>
  );
};

export default Service;
