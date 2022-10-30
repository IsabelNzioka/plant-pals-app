import React from "react";

import "./MenuToggle.css";

const MenuToggle = (props) => {
  return (
    <div className="MenuBars" onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default MenuToggle;
