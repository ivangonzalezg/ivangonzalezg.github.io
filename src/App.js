import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import shortid from "shortid";
import React, { Component } from "react";
import routes from "./routes";
import "./App.scss";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getRoutes = () => {
    return Object.values(routes).map(route => {
      if (route.public) {
        return <Route path={route.path} render={props => <route.component {...props} />} key={shortid.generate()} exact />;
      }
      return null;
    });
  };

  render() {
    return (
      <HelmetProvider>
        <BrowserRouter>
          <Route path="/" render={() => <Switch>{this.getRoutes()}</Switch>} />
        </BrowserRouter>
      </HelmetProvider>
    );
  }
}
