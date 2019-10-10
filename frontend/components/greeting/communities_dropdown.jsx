import React from "react";
import { Link } from "react-router-dom";

const CommunitiesDropdown = ({className, logout}) => (
  <div className={`${className} communities-dropdown`}>
    <h3>CURRENT COMMUNITY</h3>
    <ul className="community">
      <li>
        <Link to="/"><i className="so-icon"></i>Heap Overrun</Link>
        <ul className="community-links">
          <li><a onClick={logout}>log out</a></li>
        </ul>        
      </li>
      <li>
        <i className="l-icon"></i>
        <Link to="/"><i className="so-icon grayscale"></i> Meta Heap Overrun</Link>
      </li>
    </ul>
    <h3>YOUR COMMUNITIES</h3>
    <ul className="community your-community">
      <li>
        <Link to="/"><i className="so-icon"></i>Heap Overrun</Link>
      </li>
    </ul>
  </div>
);

export default CommunitiesDropdown;