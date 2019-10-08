import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import HeaderNav from "./header_nav";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

const App = () => (
  <div>
    <HeaderNav />

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;