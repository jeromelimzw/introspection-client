import React from "react";
import { Container } from "reactstrap";
import { getCategories } from "./utils/extractData";

const CategoryDescription = ({ category = getCategories()[0] }) => {
  return (
    <Container>
      <h1>{category}</h1>
      {category ? (
        <p>
          Awareness about the different systemic factors that shape inequality
          in society (racism, sexism, poverty etc.), knowledge about own
          privilege and an idea how to use it in a beneficial way.
        </p>
      ) : (
        undefined
      )}
    </Container>
  );
};

export default CategoryDescription;
