import * as React from "react";
import { Component } from "react-simplified";
import ReactDOM from "react-dom";
import { NavLink, HashRouter, Route } from "react-router-dom";

class Arbeid extends Component {
  render() {
    return <h1 align="center">Denne siden er under arbeid dessverre</h1>;
  }
}
ReactDOM.render(
  <HashRouter>
    <div>
      <Menu />
      <Route exact route="/" component={Arbeid} />
    </div>
  </HashRouter>,
  document.getElementById("root")
);
