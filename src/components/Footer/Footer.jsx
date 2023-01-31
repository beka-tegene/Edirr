import React from "react";
import classes from "./Footer.module.css";
import logo from "../../img/eDirr.png";
import logo1 from "../../img/Subtract.png";
import { RiAppStoreFill } from "react-icons/ri";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className={classes["footer-container"]}>
      <div className={classes["footer-blur"]}></div>
      <div className={classes["footer-top"]}>
        <div className={classes["footer-brand"]}>
          <img src={logo1} alt="" />
          <img src={logo} alt="" />
        </div>
        <div className={classes["footer-app"]}>
          <h2>Mobile App</h2>
          <i>
            <IoLogoGooglePlaystore />
            <span>Play store</span>
          </i>
          <i>
            <RiAppStoreFill />
            <span>App store</span>
          </i>
        </div>
        <div className={classes["footer-service"]}>
          <h2>Service</h2>
          <li>health insurance</li>
          <li>assets</li>
          <li>education</li>
          <li>start ups</li>
        </div>
        <div className={classes["footer-company"]}>
          <h2>Company</h2>
          <li>About Us</li>
          <li>Contact Us</li>
        </div>
        <div className={classes["footer-input"]}>
          <div>
            <input type={"text"} placeholder="example@gmail.com" />
            <button>subscribe</button>
          </div>
        </div>
      </div>
      <hr />
      <div className={classes["footer-bottom"]}>
        <p>&copy;Edirr. DanEnergyEthiopia ,copyRight All Reserved</p>
        <div>
          <span>Follow Us</span>
          <i>
            <AiFillFacebook />
          </i>
          <i>
            <AiFillInstagram />{" "}
          </i>
          <i>
            <AiFillTwitterCircle />
          </i>
          <i>
            <AiFillLinkedin />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
