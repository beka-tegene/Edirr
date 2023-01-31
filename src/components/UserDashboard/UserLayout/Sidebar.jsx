import React from "react";
import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";
import { GiHamburgerMenu, GiCoins } from "react-icons/gi";
import { AiOutlineDashboard } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { MdPayment, MdEventAvailable } from "react-icons/md";
import { CiSquareQuestion } from "react-icons/ci";
const Sidebar = () => {
  return (
    <div className={classes["sidebar-container"]}>
      <div className={classes["sidebar-toggler"]}>
        <i>
          <GiHamburgerMenu />
        </i>
      </div>
      <nav className={classes.sidebar}>
        <ul>
          <li>
            <Link to={"/dashboard"}>
              <AiOutlineDashboard /> &nbsp; Dashboard
            </Link>
          </li>
          <li>
            <Link to={"/my-edirr"}>
              <GiCoins />
              &nbsp;My Edirr
            </Link>
          </li>
          <li>
            <Link to={"/available-edirr"}>
              <MdEventAvailable />
              &nbsp; Available Edirr
            </Link>
          </li>
          <li>
            <Link to={"/request"}>
              <CiSquareQuestion />
              &nbsp; Request
            </Link>
          </li>
          <li>
            <Link to={"/payment"}>
              <MdPayment />
              &nbsp; Payment
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <FiLogOut />
              &nbsp; Log Out
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classes["sidebar-footer"]}>
        <p>designed by eDirr team</p>
        <p>&copy;copyRight All reserved</p>
      </div>
    </div>
  );
};

export default Sidebar;
