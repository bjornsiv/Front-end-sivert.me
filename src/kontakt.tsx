import React, { Component } from "react";

class Kontakt extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid text-center">
        <h1 className="display-4">Kontakt meg</h1>
        <p className="lead">Her kan jeg kontaktes</p>
        <hr className="my-4"></hr>
        <table style={{
          position: 'relative', left: '50%', top: '90%',
          transform: 'translate(-50%, -10%)'
        }}>
          <tbody>
            <tr className="lead text-center">
              <th>Epost:   </th>
              <td>sivertbjorn@gmail.com</td>
            </tr>
            <tr className="lead text-center">
              <th>Epost:   </th>
              <td>admin@sivert.me</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Kontakt;


/*
<table style={{
          position: 'relative', left: '50%', top: '90%',
          transform: 'translate(-50%, -10%)'
        }}>
          <tbody>
            <tr className="lead text-center">
                <td><a href="/1Prosjekter/Bobler.html">Enkle bobler</a></td>
              </tr>
              <tr className="lead text-center">
                <td><a href="/1Prosjekter/greenBottles.html">Green bottles</a></td>
                </tr>
              <tr className="lead text-center">
                <td><a href="/1Prosjekter/Deling.html">Litt deling</a></td>
                </tr>
              <tr className="lead text-center">
                <td><a href="/1Prosjekter/battleship.html">Battleships</a></td>
            </tr>
          </tbody>
        </table>
*/