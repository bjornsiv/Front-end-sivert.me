import React, { Component } from "react";

class Konvertor extends Component {
  render() {
    return (
      <div>
        <i>
          <h2>Konverter mellom metric og imperial!</h2>
        </i>
        <select type="dropdown">
          <option>
            <span>Meter</span>
          </option>
          <option>
            <span>Kilometer</span>
          </option>
          <option>
            <span>Liter</span>
          </option>
        </select>
      </div>
    );
  }
}

export default Konvertor;
