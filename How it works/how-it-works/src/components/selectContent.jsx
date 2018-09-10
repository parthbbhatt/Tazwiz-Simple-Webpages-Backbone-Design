import React, { Component } from "react";
import "../componentCSS/selectCSS.css";

class Pathways extends Component {
  render() {
    return (
      <div>
        <div className="tempData">
          <h1 className="text-center">Hello World</h1>
        </div>

        <div className="row text-center">
          <div className="col-md-3">
            <button type="button" className="btn btn-primary btn-lg">
              Post A Task
            </button>
          </div>

          <div className="col-md-3">
            <button type="button" className="btn btn-primary btn-lg">
              Post A Service
            </button>
          </div>

          <div className="col-md-3">
            <button type="button" className="btn btn-primary btn-lg">
              Communicate
            </button>
          </div>

          <div className="col-md-3">
            <button type="button" className="btn btn-primary btn-lg">
              Rating System
            </button>
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

export default Pathways;
