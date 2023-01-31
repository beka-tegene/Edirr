import React from "react";
import coins from "../../img/coins 1.png";
import coins1 from "../../img/coins.png";
import classes from "./About.module.css";
const About = () => {
  return (
    <div className={classes["about-container"]} id='about'>
      <div className={classes["about-circle"]}></div>

      <div className={classes["about"]}>
        <div className={classes["about-img"]}>
          <img src={coins} alt="img" />
          <img src={coins1} alt="img" />
        </div>
        <div className={classes["about-paragraph"]}>
          <h1>About Us</h1>
          <hr />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            dolorum voluptatum molestiae ipsam architecto, quam sed eligendi a
            eaque voluptate soluta nihil totam eos! Eos quasi commodi rerum
            minima eius! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Tempora accusantium dolore soluta sed quaerat? Molestias id,
            voluptates quis inventore, facere eius pariatur dolor totam nulla
            modi repellendus, repudiandae commodi. Odit.
          </p>
          <button>About more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
