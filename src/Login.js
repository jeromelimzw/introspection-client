import React, { Component } from "react";
import { Container, Form, FormGroup, Label, Input } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="tc mt4">
        <p className="f2 green fw6">Log in to your account</p>
        <Form>
          <FormGroup>
            <Label>User Name</Label>
            <input
              type="text"
              className="br4 w-60 ml2 b--moon-gray bw1 tc pv2"
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <input
              type="password"
              className="br4 w-60 ml3 b--moon-gray bw1 tc pv2 "
            />
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default Login;
