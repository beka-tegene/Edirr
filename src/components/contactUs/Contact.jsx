import React from "react";
import classes from "./Contact.module.css";
import bg from "../../img/Rectangle 9095.png";
import bg1 from "../../img/Rectangle 9096.png";
import Form from "./Form";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className={classes["contact-container"]} id="contact">
      <div className={classes["contact"]}>
        <div className={classes["contact-us"]}>
          <h1>Contact Us</h1>
          <p>
            Fill free to contact us any time .we will get back to you as soon as
            we can !
          </p>
          <Form />
        </div>
        <div className={classes["contact-info"]}>
          <h1>contact info</h1>
          <div>
            <i>
              <MdEmail />
            </i>
            <span>danjfnd@gmail.com</span>
          </div>
          <div>
            <i>
              <BsFillTelephoneFill />
            </i>
            <span>+2519787778</span>
          </div>
          <div>
            <i>
              <IoLocationSharp />
            </i>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15761.821165972622!2d38.8355686!3d9.0221648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x64d206dc3a577468!2sDan%20Energy%20Research%20and%20Development%20PLC!5e0!3m2!1sen!2set!4v1673861617573!5m2!1sen!2set"
              width="300"
              height="200"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <img src={bg} alt="bg" />
      <img src={bg1} alt="bg" />
    </div>
  );
};

export default Contact;
