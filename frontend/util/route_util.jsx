import React from "react";
import { Redirect, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Auth = ({ component: Component, path, exact, loggedIn }) => (
  <Route
    path={path}
    exact={exact}
    render={props => loggedIn ? <Redirect to="/" /> : <Component {...props} />}
  />
);

const Protected = ({ component: Component, path, exact, loggedIn }) => (
  <Route
    path={path}
    exact={exact}
    render={props => loggedIn? <Component {...props} /> : <Redirect to="/login" />}
  />
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUserId)
});

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)
);

export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Protected)
);