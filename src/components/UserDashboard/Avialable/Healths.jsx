import React from 'react'
import classes from "./AvailableCard.module.css";
import { AiOutlineSend } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
const Healths = (props) => {
 const educationData = props.onHealths.filter(
   (item) => item.EdirrType === "health"
 );
 return (
   <div className={classes["available-card-card"]}>
     {educationData.map((item, index) => (
       <div className={classes["available-cardCard-container"]} key={index}>
         <div className={classes["available-cardCard-header"]}>
           <AiOutlineSend />
           <BiHelpCircle />
         </div>
         <div className={classes["available-cardCard"]}>
           <div className={classes["available-cardCard-icon"]}>
             education icon
           </div>
           <div className={classes["available-cardCard-text"]}>
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
         <div className={classes["available-cardCard-btn"]}>
           <button>Join eDirr</button>
         </div>
         <div className={classes["available-cardCard-blur"]}></div>
         <div className={classes["available-cardCard-blur"]}></div>
       </div>
     ))}
   </div>
 );
}

export default Healths