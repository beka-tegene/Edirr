import React from "react";
import classes from "./Hero.module.css";
import heroImg from "../../img/hero img (1).png";
import Button from "../UI/Button";
import { IoIosArrowDown } from "react-icons/io";
const Hero = () => {
  return (
    <div className={classes["hero-container"]}>
      <div className={classes["hero-left"]}>
        <div className={classes["hero-blur"]}></div>
        <div className={classes["hero-text"]}>
          <h1>DAN Energy eDirr </h1>
          <p>
            Life insurance Life insuranceLife insurance Life insurance Life
            insurance Life insurance
          </p>
          <div className={classes["hero-btn"]}>
            <Button />
          </div>
        </div>
      </div>
      <div className={classes["hero-img"]}>
        <img src={heroImg} alt="hero Img" />
      </div>
      <div className={classes["hero-arrow"]}>
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Hero;
