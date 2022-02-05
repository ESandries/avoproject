import React from "react";
import reactDom from "react-dom";
import App from "./routes/App";
import "./main.css";
import "./styles/header.css";
import "./styles/variables.css";
import "./projects/avo-project/avoStyles.css";

reactDom.render(<App />, document.getElementById("app"));
