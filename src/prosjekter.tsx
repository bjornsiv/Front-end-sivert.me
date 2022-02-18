import React, { Component } from "react";
import { CardRow, Card } from "./widgets";
import { createHashHistory } from 'history';
const history = createHashHistory();

class Prosjekter extends Component {



  render() {
    return (
      <div className="jumbotron jumbotron-fluid text-center ">
        <h1 className="display-4">Prosjekter</h1>
        <p className="text-center">Dette er hovedsakelig skole prosjekter</p>
        <hr className="my-4"></hr>
        <Card title="Retro Nettside prosjekt/spill">
          <p className="p-style">Webutviklings prosjekt med 4 andre, prosjektet inkluderte et spill som fungerer i nettleseren samt en tillhørende nettside. </p>
          <a href="https://www.sivert.me/nettside/" className="btn btn-secondary">Se Prosjekt</a>
        </Card>
        <Card title="Game Ratings">
          <p className="p-style">Et annet skoleprosjekt der vi skulle lage en side der man kunne skrive annmeldelser til spill. <br/> Her har ikke databasen blitt satt opp på ny, da den orginalt brukte NTNU sine databasetjener. <br/>Man vil kun kunne se "skallet" til siden.  </p>
          <a href="https://www.sivert.me/Prosjektoppgave-H21/#/" className="btn btn-secondary a- style">Se Prosjekt</a><a href="https://github.com/bjornsiv/Prosjektoppgave-H21" className="btn btn-secondary a-style">Se GitHub</a>
        </Card>
        <Card title="Frontend Sivert.me">
          <p className="p-style">Består av siden man ser her samt noen av filene som ligger bak. <br/>Prosjektet blir og kjørt på en ubuntu server der jeg måtte sette opp serveren samt SSL sertifikatet</p>
          <a href="https://github.com/bjornsiv/Front-end-sivert.me" className="btn btn-secondary a-style">Se GitHub</a>
        </Card>
        <Card title="Mujaffa spillet">
          <p className="p-style">Mitt forsøk på å bevare det berømte flash spillet "Mujaffa" i fungerende tillstand på internett.<br/> Fungerer kun delvis</p>
          <a href="https://www.sivert.me/1Prosjekter/mujaffa.html" className="btn btn-secondary">Se Prosjekt</a>
        </Card>
        <Card title="Karakterkalkulator - WIP">
          <i className="p-style">Her forsøkte jeg å integrere en karakterkalkulatorinn på denne siden. <br/> Denne er foreløpelig lagt på hyllen da jeg må prioritere andre ting</i>
        </Card>
      </div>
    );
  }
  
}

export default Prosjekter;
