import React, { Component } from "react";

class Kontakt extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid text-center">
        <h1 className="display-4">Kontakt meg</h1>
        <p className="lead">Her kan jeg kontaktes</p>
        <hr className="my-4"></hr>
        <table>
          <tbody>
            <tr className="lead">
              <th>Epost: </th>
              <td>admin@sivert.me</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Kontakt;
