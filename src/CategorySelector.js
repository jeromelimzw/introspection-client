import React from "react";
import { Container } from "reactstrap";
import { getCategories } from "./utils/extractData";

const CategorySelector = ({ handleCategory, category }) => {
  return (
    <Container className="ba bw0 pa3 br3 bg-lightest-blue" fluid>
      <h2>Select Category:</h2>
      {getCategories().map(a => (
        <input
          type="button"
          value={a}
          onClick={handleCategory}
          className={` br3 ba f4 fw7 ma2 grow ${
            category === a ? "bg-green white " : "bg-white green b--green"
          }`}
        />
      ))}
    </Container>
  );
};

export default CategorySelector;
