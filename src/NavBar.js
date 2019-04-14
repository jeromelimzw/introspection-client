import React from "react";
import { Container } from "reactstrap";
import { NavLink as Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Container
      fluid
      className="bg-lightest-blue f4 fw7 flex justify-around items-center"
    >
      <Link to="/about" className="gray pv3" activeClassName="navy f3 fw7">
        About Introspection
      </Link>

      <Link to="/radar" className="gray" activeClassName="navy f3 fw7">
        Introspection Radar
      </Link>

      <Link to="/plan" className="gray" activeClassName="navy f3 fw7">
        Action Plan
      </Link>

      <Link to="/admin" className="gray" activeClassName="navy f3 fw7">
        Admin Panel
      </Link>

      <Link
        to="/login"
        className="gray fw5 flex items-center"
        activeClassName="navy f3 fw7"
      >
        <img
          src="img/avatar.png"
          alt=""
          width="50"
          height="50"
          className="br-100 mr3"
        />
        Esther T.
      </Link>
    </Container>
  );
};

export default NavBar;
