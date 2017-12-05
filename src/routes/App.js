import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

// Containers
import Main from "../containers/Main/Main";

// Views
import Login from "../modules/Login";
import Register from "../views/Pages/Register/";
import Page404 from "../views/Pages/Page404/";
import Page500 from "../views/Pages/Page500/";

const appRoutes = [
  {
    type: "route",
    path: "/login",
    name: "Login Page",
    component: Login,
    exact: true
  },
  {
    type: "route",
    path: "/register",
    name: "Register Page",
    component: Register,
    exact: true
  },
  {
    type: "route",
    path: "/404",
    name: "Page not found",
    component: Page404,
    exact: true
  },
  {
    type: "route",
    path: "/",
    name: "Home",
    component: Main,
    exact: false
  }
];
export const AppRoutes = () => (
  <Switch>
    {appRoutes.map((route, index) => {
      switch (route.type) {
        case "route":
          return (
            <Route
              exact={route.exact}
              path={route.path}
              name={route.name}
              component={route.component}
              key={index}
            />
          );
        default:
          return;
      }
    })}
  </Switch>
);
