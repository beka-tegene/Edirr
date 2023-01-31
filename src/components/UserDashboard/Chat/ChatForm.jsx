import React from "react";
import classes from "./Chat.module.css";
import { MdAttachFile, MdOutlineEmojiEmotions, MdSend } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
const ChatForm = () => {
  return (
    <form className={classes["chat-input"]}>
      <div className={classes["chat-file"]}>
        <label htmlFor="file">
          <MdAttachFile />
        </label>
        <input type="file" id="file" hidden />
      </div>
      <i>
        <MdOutlineEmojiEmotions />
      </i>
      <textarea
        cols="30"
        rows="1"
        placeholder="write your message..."
      ></textarea>
      <button>
        <TfiAnnouncement />
      </button>
      <button>
        <MdSend />
      </button>
    </form>
  );
};

export default ChatForm;
