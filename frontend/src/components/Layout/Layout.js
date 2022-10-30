import React, { useState } from "react";

import Navbar from "../Navigation/Navbar/Navbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

import "./Layout.css";

const Layout = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const closeSideDrawer = () => {
    setShowDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowDrawer(!showDrawer);
  };
  return (
    <div>
      <Navbar menuBarClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showDrawer} closed={closeSideDrawer} />
      {props.children}
      <h1>Footer</h1>
    </div>
  );
};

export default Layout;
