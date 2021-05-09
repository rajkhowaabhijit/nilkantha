import React from "react";
import { Route, Redirect } from "react-router-dom";
import { admin } from "../Utils/config";
import { isAuthenticated } from "../Utils/Requests/Auth";

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return isAuthenticated() && isAuthenticated().user.email === admin ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      );
    }}
  />
);

export default AdminRoute;