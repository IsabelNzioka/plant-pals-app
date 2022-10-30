import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

import "./NavigationItems.css";

const NavigationItems = () => {
  return (
    <div>
      <ul className="NavigationItems">
        <NavigationItem link="/">Plants</NavigationItem>
        <NavigationItem link="/plants">Tools</NavigationItem>
        <NavigationItem link="/about">About</NavigationItem>

        <NavigationItem link="/blog">Blog</NavigationItem>

        <NavigationItem link="/plants">Home</NavigationItem>
      </ul>
    </div>
  );
};

export default NavigationItems;
