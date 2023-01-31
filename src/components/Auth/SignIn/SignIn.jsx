import React from "react";
import { Link } from "react-router-dom";
import classes from "./SignIn.module.css";
// import { authAction } from "../../../store/auth-slice";
// import { useDispatch, useSelector } from "react-redux";
const SignIn = () => {
  // const dispatch = useDispatch()
  // const UsNaRef = useRef();
  // const errRef = useRef();

  // const [userName, setUserName] = useState("");
  // const [isPassword, setIsPassword] = useState("");
  // const [errMsg, setErrMsg] = useState("");
  // const [successfulMsg, setSuccessfulMsg] = useState(false);

  // useEffect(() => {
  //   UsNaRef.current.focus();
  // }, []);
  // useEffect(() => {
  //   setErrMsg("");
  // }, [userName, isPassword]);

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   dispatch(
  //     authAction.login({
  //       userName: userName,
  //       isPassword: isPassword,
  //     })
  //   );
  //   // console.log(userName, isPassword);
  //   setIsPassword("");
  //   setUserName("");
  //   setSuccessfulMsg(true);
  // };
  // const focusHandler = () => {
    
  // }
  return (
    <div className={classes["login-container"]}>
      <div className={classes["login"]}>
        <h1 className={classes["login-h1"]}>Sign In</h1>
        <h1 className={classes["login-h4"]}>
          Welcome back! Glad to see you,Again!{" "}
        </h1>
        <form className={classes["login-form"]}>
          <div className={classes["form-control"]}>
            <label htmlFor="username">user name</label>
            <input
              type={"text"}
              id="username"
              autoComplete={"off"}
             
              required
            />
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="password">Password</label>
            <input
              type={"password"}
              id="password"
           
              required
            />
          </div>
          <div className={classes.forget}>
            <Link to={"/forget"}>Forget Password?</Link>
          </div>
          <div className={classes["login-btn"]}>
            <button>login</button>
          </div>
        </form>
        <p className={classes["login-p"]}>
          Don't have an account? <Link to={"/register"}>Sign Up Now</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
