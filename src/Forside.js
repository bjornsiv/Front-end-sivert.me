import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Arbeid from "./Arbeid";
import Test from "./Test";
import Kontakt from "./Kontakt";
import Pepe from "./Pepe";
import Links from "./Links";

class Forside extends Component {
  render() {
    return (
      <Router>
        <div className="bg-dark">
          <span className="h3 text-white bg-dark titel nav-link" width="300" href="{/}">
            <img src="/Assets/229133.png" width="64px" height="64px" />
              Sivert.me
          </span>
          <div className="dropdown">
            <button
              className="btn btn-dark dropdown-toggle dropdownKnapp"
              type="button"
              data-toggle="dropdown"
            >
              {" "}
              Meny ☰<span className="caret"></span>
            </button>

            <ul className="dropdown-menu">
              <li>
                <Link
                  className="text-dark bg-dark"
                  to={"/"}
                  className="nav-link"
                >
                  {" "}
                  Hjem{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="text-dark bg-dark"
                  to={"/links"}
                  className="nav-link"
                >
                  Linker
                </Link>
              </li>
              <li>
                <Link
                  className="text-dark bg-dark"
                  to={"/kontakt"}
                  className="nav-link"
                >
                  Kontakt meg
                </Link>
              </li>
              <li>
                <Link
                  className="text-dark bg-dark"
                  to={"/pepe"}
                  className="nav-link"
                >
                  PEPE
                </Link>
              </li>
              <li>
                <Link
                  className="text-dark bg-dark"
                  to={"/test"}
                  className="nav-link"
                >
                  Tekst Test
                </Link>
              </li>
            </ul>
          </div>
          <hr />
          <Switch>
            <Route exact path="/" component={Arbeid} />
            <Route path="/links" component={Links} />
            <Route path="/kontakt" component={Kontakt} />
            <Route path="/pepe" component={Pepe} />
            <Route path="/test" component={Test} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Forside;
