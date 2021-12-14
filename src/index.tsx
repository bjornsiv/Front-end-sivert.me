// I denne filen ligger stiene for sidevisning, meny og forside
import ReactDOM from 'react-dom';
import * as React from 'react';
import { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { NavBar, Card, Alert, Column } from './widgets';
import { createHashHistory } from 'history';
import Arbeid from './arbeid'

const history = createHashHistory();

// Meny med link til andre sider 
class Menu extends Component {
  searchQuery: string = '';

  render() {
    return (
      <>
        <NavBar brand="">
          <NavBar.Link to="/">
            <img src="/Assets/229133.png"></img>
          </NavBar.Link>
        </NavBar>
        <Card title="Sivert.me">
          <Column right={true} width={100}>
            /*dropdown */
          </Column>
          <Column right={true}>
            <NavBar.Link to="/">Prosjekter</NavBar.Link>
          </Column>
          <Column right={true}>
            <NavBar.Link to="/">Home</NavBar.Link>
          </Column>
          <Column>Rate new and trending games - or your all time favorites!</Column>
        </Card>
      </>
      /*<SearchBar placeholder="">Search for games</SearchBar>*/
    );
  }
}

/* 
<div className="d-flex justify-content-start">
      <div className="p-2 col-example text-left">Flex item 1</div>
      <div className="p-2 col-example text-left">Flex item 2</div>
      <div className="p-2 col-example text-left">Flex item 3</div>

*/

// Definerer stiene til de ulike sidevisningene
const root = document.getElementById('root');
if (root)
  ReactDOM.render(
    <HashRouter>
      <div>
        <Alert />
        <Menu />
        <Route exact path="/" component={Arbeid} />
      </div>
    </HashRouter>,
    document.getElementById('root')
  );
