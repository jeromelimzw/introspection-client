import React, { Component } from "react";
import { Container } from "reactstrap";
import Scatter from "./Scatter";

class Radar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="tc mt3">
        <p className="f2 fw6 green">Singapore's Introspection Radar</p>
        <div>
          <button className="b--transparent white f3 bg-green br4 ph4 mr4">
            2018
          </button>
          <button className="b--transparent white f3 bg-green br4 ph4">
            2019
          </button>
        </div>
        <Scatter />
      </Container>
    );
  }
}

export default Radar;
