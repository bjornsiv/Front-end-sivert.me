import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Arbeid from "./Arbeid";
import Test from "./Test";
import Kontakt from "./Kontakt";

class Forside extends Component{
  render(){
    return(
      <HashRouter>
              <div>
                <ul className="header navbar-expand-lg navbar-dark bg-dark navbar-nav mr-auto"><span className="h3 text-white bg-dark">Sivert.me</span>
                  <li className="nav-item btn btn-outline-light text-white bg-dark"><NavLink className="nav-link active" to="/">Hjem</NavLink></li>
                  <li className="nav-item btn btn-outline-light text-white bg-dark"><NavLink className="nav-link" to="/test">Test Tekst</NavLink></li>
                  <li className="nav-item btn btn-outline-light text-white bg-dark"><NavLink className="nav-link" to="/kontakt">Kontakt meg</NavLink></li>
                </ul>
                <div className="content">
                  <Route exact path="/" component={Arbeid}/>
                  <Route path="/test" component={Test}/>
                  <Route path="/kontakt" component={Kontakt}/>
                </div>
              </div>
            </HashRouter>
        )
      }
    }


export default Forside;
