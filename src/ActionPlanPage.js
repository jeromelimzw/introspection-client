import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryDescription from "./CategoryDescription";
import CategorySelector from "./CategorySelector";
import PieChart from "./PieChart";

class ActionPlanPage extends Component {
  constructor(props) {
    super(props);
    this.state = { category: "" };
  }

  handleCategorySelection = event => {
    this.setState({ category: event.target.value });
    console.log(this.state.category);
  };
  render() {
    const { category } = this.state;
    return (
      <Container>
        <p className="f2 tc fw6 mt3 green">Singapore's Action Plan</p>
        <CategorySelector
          handleCategory={this.handleCategorySelection}
          category={category}
        />
        <CategoryDescription category={category} />
        <Row>
          <Col>
            <PieChart category={category} />
          </Col>
          <Col>Column 2</Col>
        </Row>
        <Row>
          <Col>Column 3</Col>
          <Col>Column 4</Col>
        </Row>
      </Container>
    );
  }
}

export default ActionPlanPage;
