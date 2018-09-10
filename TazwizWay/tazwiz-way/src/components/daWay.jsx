import React, { Component } from "react";
import "../componentCSS/dayWayCSS.css";

class TheWay extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="text-center">Tazwiz Way</h1>
        </div>

        <div>
          <div className="row text-center">
            <h1 className="card left bg-light col-md-2 col-sm-5 offset-md-1">
              Temp
            </h1>
            <h1 className="card right bg-light col-md-2 col-sm-5 offset-md-6">
              Temp
            </h1>
          </div>
          <div className="row text-center down">
            <h1 className="card left bg-light col-md-2 col-sm-5 offset-md-1">
              Temp
            </h1>
            <h1 className="card right bg-light col-md-2 col-sm-5 offset-md-6">
              Temp
            </h1>
          </div>
        </div>
        <div id="nav" className="text-center">
          <a>Post a task</a>
          <a>Post a service</a>
        </div>
      </div>
    );
  }
}

export default TheWay;
