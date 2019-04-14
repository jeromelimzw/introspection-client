import React, { Component } from "react";
import DragAndDropUpload from "./DragAndDropUpload";
import { Container } from "reactstrap";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <p className="f2 tc fw6 mt3"> Admin Panel</p>
        <DragAndDropUpload />;
      </Container>
    );
  }
}

export default AdminPage;
