import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// Styles
// Import Font Awesome Icons Set
import "font-awesome/css/font-awesome.min.css";
// Import Simple Line Icons Set
import "simple-line-icons/css/simple-line-icons.css";
// Import Main styles for this application
import "../scss/style.scss";

//Router
import { AppRoutes } from "./routes/App";

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <HashRouter history={history}>
        <AppRoutes />
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
