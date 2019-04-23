import React from "react";
import { Container } from "reactstrap";
import Scatter from "./Scatter";
import data from "./static/2019";

const Radar = () => {
  return (
    <Container className="tc mt3">
      <p className="f2 fw6 green">Singapore's Introspection Radar</p>
      <Scatter data={data} />
    </Container>
  );
};

export default Radar;
