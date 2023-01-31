import React from "react";
import Sidebar from "./Sidebar";
import UserNavigation from "./UserNavigation";
import classes from "./UserLayout.module.css";
import Chat from "../Chat/Chat";
import { useState } from "react";
const UserLayout = (props) => {
  const [chat, setChat] = useState(false);
  const chatHandler = () => {
    setChat(true);
  };
  const chatHiddenHandler = () => {
    setChat(false);
  };
  return (
    <div className={classes["userLayout-container"]}>
      <UserNavigation onChatHandler={chatHandler} />
      <main>
        <Sidebar />
        {props.children}
        {chat && <Chat onChatHiddenHandler={chatHiddenHandler} />}
      </main>
    </div>
  );
};

export default UserLayout;
