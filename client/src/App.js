import React, { Fragment } from "react";
import Landing from "./components/layout/landing";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <Landing />
      </Fragment>
    </Router>
  );
}

export default App;
