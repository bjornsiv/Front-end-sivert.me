// I denne filen ligger stiene for sidevisning, meny og forside
import ReactDOM from 'react-dom';
import * as React from 'react';
import { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { NavBar, Card, Alert, Column, Logo, Button } from './widgets';
import { createHashHistory } from 'history';
import Arbeid from './arbeid'
import Prosjekter from './prosjekter';
import Links from './Links';
import Kontakt from './kontakt';
import Kalkulator from './karakterkalkulator'

const history = createHashHistory();

// Meny med link til andre sider 
class Menu extends Component {

  render() {
    return (
      <>
        <div color='grey'>
          
          <Logo title="Sivert.me"></Logo>
          
            <NavBar.Link to="/">Hjem</NavBar.Link>
            <NavBar.Link to="/CV">CV</NavBar.Link>
            <NavBar.Link to="/linker">Linker</NavBar.Link>
            <NavBar.Link to="/prosjekter">Prosjekter</NavBar.Link>
            <NavBar.Link to="/kontakt">Kontakt</NavBar.Link>

        </div>
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
        <Alert />
        <Menu />
        <Route exact path="/" component={Arbeid} />
        <Route exact path="/prosjekter" component={Prosjekter} />
        <Route exact path="/linker" component={Links} />
        <Route exact path="/kontakt" component={Kontakt} />
        <Route exact path="/karakter" component={Kalkulator}/>
      </div>
    </HashRouter>,
    document.getElementById('root')
  );
