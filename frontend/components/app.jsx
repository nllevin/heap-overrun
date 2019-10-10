import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HeaderNav from "./header_nav";
import MainContent from "./main_content";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import QuestionFormContainer from "./question/question_form_container";

const App = () => (
  <div>
    <HeaderNav />
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path ="/questions/new" component={QuestionFormContainer} />
      <Route component={MainContent} />
    </Switch>
  </div>
);

export default App;