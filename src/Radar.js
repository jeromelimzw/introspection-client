import React, { Component } from "react";
import { Container } from "reactstrap";
import Scatter from "./Scatter";
import data from "./static/2019";

class Radar extends Component {
  constructor(props) {
    super(props);
    this.state = { year: "2018", isDescriptionOpen: false };
  }

  handleYear = event => {
    this.setState({ year: event.target.value, data });
  };
  toggleDescription = () => {
    this.setState({ isDescriptionOpen: !this.state.isDescriptionOpen });
  };

  render() {
    return (
      <Container className="tc mt3">
        <p className="f2 fw6 green">Singapore's Introspection Radar</p>
        <div>
          <button
            className={` ${
              this.state.year === "2018"
                ? "white bg-green b--transparent"
                : "green bg-white b--green"
            }  f3  br4 ph4 mr4 fw7`}
            onClick={this.handleYear}
            value={2018}
          >
            2018
          </button>
          <button
            className={` ${
              this.state.year === "2019"
                ? "white bg-green b--transparent"
                : "green bg-white b--green"
            }  f3  br4 ph4 mr4 fw7`}
            onClick={this.handleYear}
            value={2019}
          >
            2019
          </button>
        </div>
        <div>
          <h3 onClick={this.toggleDescription} className="pointer">
            What do the levels mean?{" "}
          </h3>
          {this.state.isDescriptionOpen ? (
            <ul className="tl">
              <li>
                OPEN: No or only a little understanding about the topic, but
                open to learn more about it.
              </li>
              <li>
                INFORMED: Has a baseline understanding of the topic, knows some
                key facts and principles. Might not feel comfortable starting a
                conversation about it.{" "}
              </li>
              <li>
                ENGAGED: Has a good understanding of the topic, formed an
                opinion about it. is comfortable to start and hold a
                conversation.
              </li>
              <li>
                ACTIVATED: Engage actively in discussions and debates and seek
                for opportunities to influence other people. Possibly drive an
                initiative, or lobby for the cause inside of Thoughtworks.
              </li>
            </ul>
          ) : (
            undefined
          )}
        </div>
        <Scatter data={data} />
      </Container>
    );
  }
}

export default Radar;
