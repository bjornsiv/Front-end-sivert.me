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
            <tr className="lead">
              <th align="center">
                <td><a href="/src/Prosjekter/Bobler.html">Enkle bobler</a></td><br/>
                <td><a href="/src/Prosjekter/greenBottles.html">Green bottles</a></td><br/>
                <td><a href="/src/Prosjekter/Deling.html">Litt deling</a></td><br/>
                <td><a href="/src/Prosjekter/battleship.html">Battleships</a></td><br/>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Links;
