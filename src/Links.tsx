import React, { Component } from "react";
import { CardRow } from "./widgets";
import { createHashHistory } from 'history';
import { NavLink } from "react-router-dom";

class Links extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid text-center ">
        <h1 className="display-4">Lenker</h1>
        <p className="text-center">Lenker til små mini prosjekter eller gøye ting ;)</p>
        <hr className="my-4"></hr>
        <CardRow><h1><a href="https://www.sivert.me/1Prosjekter/Bobler.html">Enkle bobler</a></h1></CardRow>
        <CardRow><h1><a href="https://www.sivert.me/1Prosjekter/greenBottles.html">Green bottles</a></h1></CardRow>
        <CardRow><h1><a href="https://www.sivert.me/1Prosjekter/Deling.html">Litt deling</a></h1></CardRow>
        <CardRow><h1><a href="https://www.sivert.me/1Prosjekter/battleship.html">Battleships</a></h1></CardRow>
      </div>
    );
  }
}

export default Links;
