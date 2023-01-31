import React from "react";
import classes from "./Chat.module.css";
import ChatForm from "./ChatForm";
import profile from "../../../img/pexels-photo-614810.png";
const DUMMY_CHAT = [
  {
    firstName: "john",
    lastName: "max",
    img: profile,
    massage: "lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
  {
    firstName: "abel",
    lastName: "max",
    img: profile,
    massage: "hi",
  },
  {
    firstName: "kayel",
    lastName: "max",
    img: profile,
    massage: "hi",
  },
  {
    firstName: "adam",
    lastName: "max",
    img: profile,
    massage: "lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
  {
    firstName: "hewan",
    lastName: "max",
    img: profile,
    massage: "hi",
  },
  {
    firstName: "set",
    lastName: "max",
    img: profile,
    massage: "lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
  {
    firstName: "matusala",
    lastName: "max",
    img: profile,
    massage: "hi",
  },
];
const ChatHero = () => {
  return (
    <div className={classes["real-chat"]}>
      {DUMMY_CHAT.map((item, index) => (
        <div key={index} className={classes["real-detail"]}>
          <img src={item.img} alt="profile" />
          <div className={classes["real-message"]}>
            <span>
              {item.firstName}&nbsp;
              {item.lastName}
            </span>
            <p>{item.massage}</p>
          </div>
        </div>
      ))}
      <ChatForm />
    </div>
  );
};

export default ChatHero;
