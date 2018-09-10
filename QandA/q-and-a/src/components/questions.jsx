import React, { Component } from "react";
import "../componentCSS/questionCSS.css";

class Question extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <h1>Q&A</h1>
        </div>
        <div class="card qs text-center mx-auto offset-md-1">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Question
                </a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <h5 class="card-title">Temporary question</h5>
            <p class="card-text">This is my question</p>
          </div>
        </div>
        <div id="nav" className="text-center">
          <a>Post a task</a>
          <a>Post a service</a>
        </div>
        <div className="card footer">TEMP DATA FOR FOOTER</div>
      </div>
    );
  }
}

export default Question;
