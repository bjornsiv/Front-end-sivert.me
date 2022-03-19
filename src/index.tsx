// I denne filen ligger stiene for sidevisning, meny og forside
import ReactDOM from 'react-dom';
import * as React from 'react';
import { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { NavBar, Column, Row, HeaderLink } from './widgets';
import { createHashHistory } from 'history';
import Arbeid from './arbeid'
import DokumentArkiv from './dokumenter';
import Prosjekter from './prosjekter';
import Links from './Links';
import Kontakt from './kontakt';
import Kalkulator from './karakterkalkulator'
import CV from './CV';

const history = createHashHistory();

// Meny med link til andre sider 
class Menu extends Component {

  render() {
    return (
        <>
        <Row className="row-margin">
        <Column>
         <HeaderLink title="Sivert Bjørnstad" to="/CV"></HeaderLink>
        </Column>
        <Column></Column>
        <Column>
          <NavBar brand="">
            <NavBar.Link to="/CV" >CV</NavBar.Link>
            <NavBar.Link to="/dokument" >Oppgaver</NavBar.Link>
            <NavBar.Link to="/prosjekter" >Prosjekter</NavBar.Link>
            <NavBar.Link to="/kontakt" >Kontakt</NavBar.Link>
          </NavBar>
        </Column>
      </Row><hr></hr>
      </>
    );
  }
}

// Definerer stiene til de ulike sidevisningene
const root = document.getElementById('root');
if (root)
  ReactDOM.render(
    <HashRouter>
      <div>
        <Menu />
        <Route exact path="/" component={CV} />
        <Route exact path="/prosjekter" component={Prosjekter} />
        <Route exact path="/linker" component={Links} />
        <Route exact path="/kontakt" component={Kontakt} />
        <Route exact path="/CV" component={CV} />
        <Route exact path="/karakter" component={Kalkulator}/>
        <Route exact path="/arbeid" component={Arbeid}/>
        <Route exact path="/dokument" component={DokumentArkiv}/>
      </div>
    </HashRouter>,
    document.getElementById('root')
  );
