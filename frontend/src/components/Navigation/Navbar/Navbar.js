import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import MenuToggle from "../SideDrawer/MenuToggle/MenuToggle";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <div className="Logo">
        <h3>Plant Pals</h3>
      </div>

      <div className="MenuItems">
        <nav className="DesktopOnly">
          <NavigationItems />
        </nav>

        <div className="Icons">
          <AiOutlineUser className="Icon" />

          <AiOutlineShoppingCart className="Icon" />
        </div>
        <MenuToggle clicked={props.menuBarClicked} />
      </div>
    </div>
  );
};

export default Navbar;
