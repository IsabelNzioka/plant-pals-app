import React from "react";
import { Link } from "react-router-dom";

import NavigationItems from "../NavigationItems/NavigationItems";
import MenuToggle from "../SideDrawer/MenuToggle/MenuToggle";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

import "./Navbar.css";

const Navbar = (props) => {
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
          {/* <NavigationItem link="/products">Home</NavigationItem> */}
          <Link to={"/login"}>
            <AiOutlineUser className="Icon" />
          </Link>

          <Link to={"/cart"}>
            <AiOutlineShoppingCart className="Icon" />
          </Link>
        </div>
        <MenuToggle clicked={props.menuBarClicked} />
      </div>
    </div>
  );
};

export default Navbar;
