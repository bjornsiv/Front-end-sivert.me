import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import Forside from "./Forside";
import "../Public/index.css";

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent)
  ){
    ReactDOM.render(<Forside />, document.getElementById("root"));
  }
else{
  ReactDOM.render(<Forside />, document.getElementById("root"));}
