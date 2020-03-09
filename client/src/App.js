import React, { Fragment } from "react";
import Landing from "./components/layout/landing";
import NavBar from "./components/layout/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Landing />
      </Fragment>
    </Router>
  );
}

export default App;
