import React from "react";
import { Link } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import SearchBar from "./search_bar";

const HeaderNav = () => (
  <div className="header-nav">
    <header>
      <Link to="/"className="nav-link logo">
        <i className="so-icon"></i>
        <span>heap<b>overrun</b></span>
      </Link>
      <SearchBar />
      <GreetingContainer />
    </header>
  </div>
);

export default HeaderNav;