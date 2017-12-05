import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Breadcrumb from "../components/Breadcrumb/";
import Aside from "../components/Aside";
import Footer from "../components/Footer/";
import Dashboard from "../views/Dashboard/";
import Charts from "../views/Charts/";
import Widgets from "../views/Widgets/";
import Buttons from "../views/Components/Buttons/";
import Cards from "../views/Components/Cards/";
import Forms from "../views/Components/Forms/";
import Modals from "../views/Components/Modals/";
import SocialButtons from "../views/Components/SocialButtons/";
import Switches from "../views/Components/Switches/";
import Tables from "../views/Components/Tables/";
import Tabs from "../views/Components/Tabs/";
import FontAwesome from "../views/Icons/FontAwesome/";
import SimpleLineIcons from "../views/Icons/SimpleLineIcons/";
import Demo from "../containers/Demo/Demo";

const routes = [
  {
    type: "route",
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    type: "route",
    path: "/demo",
    name: "Demo",
    component: Demo
  },
  {
    type: "redirect",
    from: "/",
    to: "/dashboard"
  }
];

export const MainRoutes = () => {
  return (
    <Switch>
      {routes.map((route, index) => {
        switch (route.type) {
          case "route":
            return (
              <Route
                path={route.path}
                name={routes.name}
                component={route.component}
                key={index}
              />
            );
          case "redirect":
            return <Redirect key={index} from={route.from} to={route.to} />;
          default:
            return;
        }
      })}
    </Switch>
  );
};
