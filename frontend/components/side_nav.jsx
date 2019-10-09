import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = () => (
  <nav className="side-nav">
    <NavLink exact to="/">Home</NavLink>
    <h3>PUBLIC</h3>
    <ul className="nav-links">
      <NavLink to="/questions" className="with-icon">
        <i className="globe"></i>
        Heap Overrun
      </NavLink>
    </ul>
  </nav>
);

export default SideNav;