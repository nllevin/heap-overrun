import React from "react";
import GreetingContainer from "./greeting/greeting_container";

const HeaderNav = () => (
  <div className="header-nav">
    <header>
      <a className="nav-link logo"><i className="so-icon"></i><span>heap<b>overrun</b></span></a>
      <GreetingContainer />
    </header>
  </div>
);

export default HeaderNav;