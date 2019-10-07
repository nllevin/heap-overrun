import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        <p>Welcome, {currentUser.username}</p>
        <a onClick={logout}>Log out</a>
      </div>
    )
  } else {
    return (
      <div>
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    )
  }
}

export default Greeting;