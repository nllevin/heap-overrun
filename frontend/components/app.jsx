import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HeaderNav from "./header_nav";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import QuestionShowContainer from "./question/question_show_container";
import QuestionFormContainer from "./question/question_form_container";
import QuestionIndexContainer from "./question/question_index_container";

const App = () => (
  <div>
    <HeaderNav />
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/questions/new" component={QuestionFormContainer} />
      <Route path="/questions/:questionId" component={QuestionShowContainer} />
      <Route component={QuestionIndexContainer} />
    </Switch>
  </div>
);

export default App;