import React from 'react'
import classes from './Form.module.css'
const Form = () => {
  return (
    <form className={classes["form-container"]}>
      <div className={classes["form-control"]}>
        <label>Email</label>
        <input type="text" />
      </div>
      <div className={classes["form-control"]}>
        <label>subject</label>
        <input type="text" />
      </div>
      <div className={classes["form-control"]}>
        <label>message</label>
        <textarea></textarea>
      </div>
      <div className={classes["form-btn"]}>
        <button>Send</button>
      </div>
    </form>
  );
}

export default Form