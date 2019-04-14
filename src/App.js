import React, { Component } from "react";
import { Button } from "reactstrap";
import JumboTron from "./JumboTron";
import NavBar from "./NavBar";
import Radar from "./Radar";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Routes />
      </React.Fragment>
    );
  }
}

export default App;
