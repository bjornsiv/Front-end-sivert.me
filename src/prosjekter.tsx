import React, { Component } from "react";
import { CardRow } from "./widgets";
import { createHashHistory } from 'history';
import { NavLink } from "react-router-dom";

const history = createHashHistory();

class Prosjekter extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid text-center ">
        <h1 className="display-4">Prosjekter</h1>
        <p className="text-center">Dette er hovedsakelig skole prosjekter</p>
        <hr className="my-4"></hr>
        <CardRow><h1><a href="https://www.sivert.me/nettside/">Retro Nettside prosjekt/spill</a></h1></CardRow>
        <CardRow><h1><a href="https://www.sivert.me/1Prosjekter/mujaffa.html">Mujaffa spillet</a></h1></CardRow>
        <CardRow><h1><NavLink to={'/karakter'}>Karakterkalkulator</NavLink></h1></CardRow>
      </div>
    );
  }
}
export default Prosjekter;
