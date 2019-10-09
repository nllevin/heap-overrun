import React from "react";
import { Link } from "react-router-dom";

const CommunitiesDropdown = ({className, logout}) => (
  <div className={`${className} communities-dropdown`}>
    <h3><a>CURRENT COMMUNITY</a></h3>
    <ul className="community">
      <li>
        <a><i className="so-icon"></i>Heap Overrun</a>
        <ul className="community-links">
          <li><a>help</a></li>
          <li><a>chat</a></li>
          <li><a onClick={logout}>log out</a></li>
        </ul>        
      </li>
      <li>
        <i className="l-icon"></i>
        <a><i className="so-icon grayscale"></i> Meta Stack Overflow</a>
      </li>
    </ul>
    <h3><a>YOUR COMMUNITIES</a></h3>
    <ul className="community your-community">
      <li>
        <a><i className="so-icon"></i>Heap Overrun</a>
      </li>
    </ul>
  </div>
);

export default CommunitiesDropdown;