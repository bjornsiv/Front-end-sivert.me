import React, { Component } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Arbeid extends Component {
  render() {
    return (
      <div align="center" className="jumbotron jumbotron-fluid">
        <h1 className="display-4">Denne siden er under arbeid dessverre</h1>
        <p className="lead">Kos deg på reddit i mellomtiden 😅</p>
        <hr className="my-4"></hr>
        <p className="lead">
          <img src="../assets/reddit_logo.png" width="48px" height="48px" />
          <a className="btn btn-primary btn-lg" href="https://www.reddit.com" role="button">Reddit</a>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<Arbeid />, document.getElementById("root"));
