import React, { Component } from "react";

class Links extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid text-center ">
        <h1 className="display-4">Lenker</h1>
        <p className="text-center">Lenker til små mini prosjekter eller gøye ting ;)</p>
        <hr className="my-4"></hr>
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
      </div>
    );
  }
}

export default Links;
