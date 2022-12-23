import React from "react";
import { Link } from "react-router-dom";

const DropdownItem = (props) => {
  return (
    <div>
      <li>
        <Link to={props.link} onClick={props.clicked}>
          {props.text}
        </Link>
      </li>
    </div>
  );
};

export default DropdownItem;
