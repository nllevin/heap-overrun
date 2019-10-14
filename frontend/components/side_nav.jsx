import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = () => (
  <div className="side-nav-container">
    <nav className="side-nav">
      <NavLink exact to="/">Home</NavLink>
      <h3>PUBLIC</h3>
      <ul className="nav-links">
        <NavLink 
          className="with-icon" 
          to="/questions"
          isActive={(match, location) => {
            if (match || location.pathname.startsWith("/search")) {
              return true;
            }
          }}
        >
          <i className="globe"></i>
          Heap Overrun
        </NavLink>
      </ul>
    </nav>
  </div>
);

export default SideNav;