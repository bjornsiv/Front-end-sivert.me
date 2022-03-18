import React, { Component } from "react";

class Kontakt extends Component {
  render() {
    return (
      <>
      <div className="header-align">
        <h1 >Kontakt meg</h1>
        <div>Her kan jeg kontaktes</div>
        <hr className="my-4"></hr>
      </div>
      <div className="container">
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
      </>
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