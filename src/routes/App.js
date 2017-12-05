import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

// Containers
import Main from "../containers/Main/Main";

// Views
import Login from "../views/Pages/Login/";
import Register from "../views/Pages/Register/";
import Page404 from "../views/Pages/Page404/";
import Page500 from "../views/Pages/Page500/";

const appRoutes = [
  {
    path: "/login",
    name: "Login Page",
    component: Login,
    exact: true
  },
  {
    path: "/register",
    name: "Register Page",
    component: Register,
    exact: true
  },
  {
    path: "/404",
    name: "Page not found",
    component: Page404,
    exact: true
  },
  {
    path: "/",
    name: "Home",
    component: Main,
    exact: false
  }
];
export const AppRoutes = () => (
  <Switch>
    {appRoutes.map((route, index) => (
      <Route
        exact={route.exact}
        path={route.path}
        name={route.name}
        component={route.component}
        key={index}
      />
    ))}
  </Switch>
);
