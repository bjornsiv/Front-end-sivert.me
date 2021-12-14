import React, { Component } from "react";

class Links extends Component {
  render() {
    return (
      <div align="center" className="jumbotron jumbotron-fluid" height="1000px">
        <h1 className="display-4">Lenker</h1>
        <p className="lead">Lenker til små mini prosjekter eller gøye ting ;)</p>
        <hr className="my-4"></hr>
        <table>
          <tbody>
            <tr className="lead" align="center">
                <td><a href="/1Prosjekter/Bobler.html">Enkle bobler</a></td>
              </tr>
              <tr className="lead" align="center">
                <td><a href="/1Prosjekter/greenBottles.html">Green bottles</a></td>
                </tr>
              <tr className="lead" align="center">
                <td><a href="/1Prosjekter/Deling.html">Litt deling</a></td>
                </tr>
              <tr className="lead" align="center">
                <td><a href="/1Prosjekter/battleship.html">Battleships</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Links;
