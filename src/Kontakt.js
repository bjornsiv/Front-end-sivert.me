import React, { Component } from "react";

class Kontakt extends Component {
  render() {
    return (
      <div align="center" className="jumbotron jumbotron-fluid" height="1000px">
        <h1 className="display-4">Kontakt meg</h1>
        <p className="lead">Her kan jeg kontaktes</p>
        <hr className="my-4"></hr>
          <tr className="lead">
            <th>Epost:     </th>
            <td>admin@sivert.me</td>
          </tr>
      </div>
    );
  }
}
export default Kontakt;
