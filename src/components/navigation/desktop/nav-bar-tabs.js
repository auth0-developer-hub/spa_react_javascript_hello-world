import React from "react";
import { NavBarTab } from "./nav-bar-tab";

export const NavBarTabs = () => {
  return (
    <div className="nav-bar__tabs">
      <NavBarTab path="/profile" label="Profile" />
      <NavBarTab path="/public" label="Public" />
      <NavBarTab path="/protected" label="Protected" />
      <NavBarTab path="/admin" label="Admin" />
    </div>
  );
};
