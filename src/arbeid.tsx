import React, { Component } from "react";

class Arbeid extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <h1 className="display-4">Denne siden er under arbeid dessverre</h1>
        <p className="lead">Kos deg på reddit i mellomtiden 😅</p>
        <hr className="my-4"></hr>
        <p className="lead">
          <img src="https://www.redditinc.com/assets/images/site/reddit-logo.png" height="32px" width="32px"/>
          <a className="btn btn-primary btn-lg" href="https://www.reddit.com" role="button">Reddit</a>
        </p>
      </div>
    );
  }
}
export default Arbeid;
