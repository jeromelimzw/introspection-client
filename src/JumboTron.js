import React from "react";
import { Container } from "reactstrap";
import "./JumboTron.css";

const JumboTron = () => {
  return (
    <Container fluid className="bg-navy white tc pv4 jumbotron">
      <p className="f2 fw6 mb4">About Introspection</p>
      <p className=" f4 fw5">
        Our view of the world is shaped by personal experiences and biases, but
        we realise that there is more out there, beyond our individual
        experiences. <br />
        At Thoughtworks, we want to encourage to discover these blindspots and
        provide assistance on how to close them.
        <br /> This introspection session is for you to think about and reflect
        on your individual P3 journey, in the following 8 categories:{" "}
      </p>
      <ul className="f4">
        <li>Society and Privilege</li>
        <li>Religious Minorities</li>
        <li>Diversity and Inclusion</li>
        <li>Economic Justice</li>
        <li>Racial Minorities</li>
        <li>Sexual Orientation & Gender Identity</li>
        <li>Equitable Tech</li>
        <li>Climate Injustice</li>
      </ul>
      <button className="br4 bw0 grow  f3 fw6 mt3 ph5 pv2 bg-green white ">
        Take the Survey
      </button>
    </Container>
  );
};

export default JumboTron;
