import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  let classes = ["SideDrawer", "Close"];
  if (props.open) {
    classes = ["SideDrawer", "Open"];
  }

  return (
    <div className={classes.join(" ")} onClick={props.closed}>
      <NavigationItems />
    </div>
  );
};

export default SideDrawer;
