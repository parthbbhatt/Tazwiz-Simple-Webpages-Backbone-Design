import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Pathways from "./components/selectContent";

ReactDOM.render(<Pathways />, document.getElementById("root"));
registerServiceWorker();
