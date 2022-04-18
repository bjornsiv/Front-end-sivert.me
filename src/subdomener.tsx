import React, { Component } from "react";
import { Card } from "./widgets";

class Subdomener extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid text-center ">
        <h1 className="display-4">Subdomener</h1>
        <p className="p-style">Subdomener tillhørende sivert.priv.no</p>
        <hr className="my-4"></hr>
        <Card title="hpro">
          <a href="https://www.pro.sivert.priv.no" className="btn btn-secondary"> Se her</a>
        </Card>
        <Card title="Green bottles">
          <a href="https://www.retro.sivert.priv.no" className="btn btn-secondary"> Se her</a>
        </Card>
        <Card title="Litt deling">
          <a href="https://www.prosjektoppgave.sivert.priv.no" className="btn btn-secondary"> Se her</a>
        </Card>
      </div>
    );
  }
}

export default Subdomener;
