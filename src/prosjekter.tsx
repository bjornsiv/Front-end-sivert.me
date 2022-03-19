import React, { Component } from "react";
import { Row, Card } from "./widgets";

class Prosjekter extends Component {
  render() {
    return (
      <>
      <div className="header-align">
        <h1>Prosjekter</h1>
        <div>Dette er hovedsakelig skole prosjekter</div>
        <hr className="my-4"></hr>
      </div>
      <div className="container">
          <Row>
              <Card title="Retro Nettside prosjekt/spill" center={true}>
                <p>Webutviklings prosjekt med 4 andre, prosjektet inkluderte et spill som fungerer i nettleseren samt en tillhørende nettside. </p>
                <a href="https://www.sivert.me/nettside/" className="btn btn-secondary">Se Prosjekt</a>
              </Card>

          <hr className="my-4"></hr>
              <Card title="Game Ratings" center={true}>
                <p>Et annet skoleprosjekt der vi skulle lage en side der man kunne skrive annmeldelser til spill. <br/> Her har ikke databasen blitt satt opp på ny, da den orginalt brukte NTNU sine databasetjener. <br/>Man vil kun kunne se "skallet" til siden.  </p>
                <a href="https://www.sivert.me/Prosjektoppgave-H21/#/" className="btn btn-secondary a- style">Se Prosjekt</a><a href="https://github.com/bjornsiv/Prosjektoppgave-H21" className="btn btn-secondary a-style">Se GitHub</a>
              </Card>

          <hr className="my-4"></hr>
              <Card title="Frontend Sivert.me" center={true}>
                <p>Består av siden man ser her samt noen av filene som ligger bak. <br/>Prosjektet blir og kjørt på en ubuntu server der jeg måtte sette opp serveren samt SSL sertifikatet</p>
                <a href="https://github.com/bjornsiv/Front-end-sivert.me" className="btn btn-secondary a-style">Se GitHub</a>
              </Card>

          <hr className="my-4"></hr>
              <Card title="Mujaffa spillet" center={true}>
                <p>Mitt forsøk på å bevare det berømte flash spillet "Mujaffa" i fungerende tillstand på internett.<br/> Fungerer kun delvis</p>
                <a href="https://www.sivert.me/1Prosjekter/mujaffa.html" className="btn btn-secondary">Se Prosjekt</a>
              </Card>

          <hr className="my-4"></hr>
            <Card title="Karakterkalkulator - WIP" center={true}>
              <i>Her forsøkte jeg å integrere en karakterkalkulatorinn på denne siden. <br/> Denne er foreløpelig lagt på hyllen da jeg må prioritere andre ting</i>
            </Card>
          </Row>
      </div>
      </>
    );
  }
  
}

export default Prosjekter;
