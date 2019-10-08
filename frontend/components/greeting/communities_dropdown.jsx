import React from "react";
import { Link } from "react-router-dom";

const CommunitiesDropdown = ({className, logout}) => (
  <div className={className}>
    <a onClick={logout}>Log out</a>
  </div>
);

export default CommunitiesDropdown;