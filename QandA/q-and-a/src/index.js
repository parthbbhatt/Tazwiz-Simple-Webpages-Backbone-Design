import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Question from "./components/questions";

ReactDOM.render(<Question />, document.getElementById("root"));
registerServiceWorker();
