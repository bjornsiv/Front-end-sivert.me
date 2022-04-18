import React, { Component } from "react";
import { Card } from "./widgets";

class Links extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid text-center ">
        <h1 className="display-4">Lenker</h1>
        <p className="p-style">Lenker til små mini prosjekter eller gøye ting jeg har tatt vare på gjennom årene;)</p>
        <hr className="my-4"></hr>
        <Card title="Enkle bobler">
          <a href="https://www.pro.sivert.priv.no/1Prosjekter/Bobler.html" className="btn btn-secondary"> Se her</a>
        </Card>
        <Card title="Green bottles">
          <a href="https://www.pro.sivert.priv.no/1Prosjekter/greenBottles.html" className="btn btn-secondary"> Se her</a>
        </Card>
        <Card title="Litt deling">
          <a href="https://www.pro.sivert.priv.no/1Prosjekter/Deling.html" className="btn btn-secondary"> Se her</a>
        </Card>
        <Card title="Battleships">
          <a href="https://www.pro.sivert.priv.no/1Prosjekter/battleship.html" className="btn btn-secondary"> Se her</a>
        </Card>
      </div>
    );
  }
}

export default Links;
