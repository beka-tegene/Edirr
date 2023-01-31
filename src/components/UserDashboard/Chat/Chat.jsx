import React from "react";
import classes from "./Chat.module.css";
import { BsChatLeftDots, BsCaretDownFill, BsChevronDown } from "react-icons/bs";
import { MdOutlineReportProblem } from "react-icons/md";
import ChatHero from "./ChatHero";
const Chat = (props) => {
  return (
    <div className={classes["chat-container"]}>
      <nav className={classes["chat-nav"]}>
        <div className={classes["chat-navLeft"]}>
          <i>
            <BsChatLeftDots />
          </i>
          <li>
            Dan eDirr{" "}
            <i>
              <BsCaretDownFill />
            </i>
          </li>
        </div>
        <div className={classes["chat-navRight"]}>
          <i onClick={props.onChatHiddenHandler}>
            <BsChevronDown />
          </i>
          <i>
            <MdOutlineReportProblem />
          </i>
        </div>
      </nav>
      <ChatHero />
    </div>
  );
};

export default Chat;
