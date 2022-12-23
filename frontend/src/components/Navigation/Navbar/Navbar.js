import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NavigationItems from "../NavigationItems/NavigationItems";
import MenuToggle from "../SideDrawer/MenuToggle/MenuToggle";
import DropdownItem from "./DropdownItem/DropdownItem";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiFillCaretDown } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";

import { logout } from "../../../actions/userActions.js";
import "./Navbar.css";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="Navbar">
      <div className="Logo">
        <h3>
          {" "}
          <Link to={"/"}> Plant Pals</Link>
        </h3>
      </div>

      <div className="MenuItems">
        <nav className="DesktopOnly">
          <NavigationItems />
        </nav>

        <div className="Icons">
          <div className="Cart">
            <Link to={"/cart"}>
              <AiOutlineShoppingCart className="Icon" />
            </Link>
          </div>

          {userInfo ? (
            <div className="DropdownContainer">
              <div
                className={`DropdownTrigger ${open ? "active" : "inactive"}`}
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <FiUserCheck className="Icon" />
                <p className="Login">{userInfo.name}</p>
                <AiFillCaretDown className="DropdownIcon" />
                {/* )} */}
              </div>
              <div className={`DropdownMenu ${open ? "active" : "inactive"}`}>
                <ul>
                  <DropdownItem link="/profile" text="Profile" />
                  <DropdownItem
                    link="/"
                    text="Logout"
                    clicked={logoutHandler}
                  />
                </ul>
              </div>
            </div>
          ) : (
            <div className="LogInNow">
              <FiUserPlus className="Icon" />
              <Link className="Login" to={"/login"}>
                Login
              </Link>
            </div>
          )}
        </div>
        <MenuToggle clicked={props.menuBarClicked} />
      </div>
    </div>
  );
};

export default Navbar;
