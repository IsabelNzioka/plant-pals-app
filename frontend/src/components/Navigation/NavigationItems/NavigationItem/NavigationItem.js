import React from "react";

import { NavLink } from "react-router-dom";

import "./NavigationItem.css";

const NavigationItem = (props) => {
  return (
    <div>
      <li className="NavigationItem">
        <NavLink to={props.link} className={props.active ? "active" : null}>
          {props.children}
        </NavLink>
      </li>
    </div>
  );
};

export default NavigationItem;
