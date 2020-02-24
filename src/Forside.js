import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jQuery"
import Arbeid from "./Arbeid";
import Test from "./Test";
import Kontakt from "./Kontakt";
import Media from 'react-media';

function isMobile () {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent)
    ){
      return true;
    }
}

class Forside extends Component{
  render(){
    return(
      <div>
      <HashRouter>

        <Media
          query="(min-width: 600px)"
          render={() =>

              <div className="main-list">
                <ul className="header navbar-expand-lg navbar-dark bg-dark navbar-nav mr-auto"><span className="h3 text-white bg-dark">Sivert.me</span>
                  <li className="nav-item btn btn-outline-light text-white bg-dark"><NavLink className="nav-link active" to="/">Hjem</NavLink></li>
                  <li className="nav-item btn btn-outline-light text-white bg-dark"><NavLink className="nav-link" to="/test">Test Tekst</NavLink></li>
                  <li className="nav-item btn btn-outline-light text-white bg-dark"><NavLink className="nav-link" to="/kontakt">Kontakt meg</NavLink></li>
                </ul>
              </div>

          }
        />
        <Media
          query="(max-width: 599px)"
          render={() =>
            <div>
            <span className="h3 text-white bg-dark">Sivert.me</span>
              <button type="button">
                ☰
              </button>
              <div className="second-list">
               <ul>
                 <li><NavLink className="nav-link active" to="/">Hjem</NavLink></li>
                 <li><NavLink className="nav-link active" to="/test">Test Tekst</NavLink></li>
                 <li><NavLink className="nav-link active" to="/kontakt">Kontakt Meg</NavLink></li>
               </ul>
             </div>
           </div>
         }
           />

                <div className="content">
                  <Route exact path="/" component={Arbeid}/>
                  <Route path="/test" component={Test}/>
                  <Route path="/kontakt" component={Kontakt}/>
                </div>
            </HashRouter>
            </div>
        )
      }
    }


export default Forside;
