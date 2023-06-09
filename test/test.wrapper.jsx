import React from "react";
import Column from "../src/components/Column";
import Container from "../src/components/Container";
import Jumbotron from "../src/components/Jumbotron";
import Row from "../src/components/Row";
import TitleHeader from "../src/components/TitleHeader";

export default function TestWrapper({ children }) {
  return (
    <div>
      <Jumbotron>
        <TitleHeader className="text-center" title="React Form" />
      </Jumbotron>
      <Container>
        <Row>
          <Column className="col-md-6 offset-md-3">{children}</Column>
        </Row>
      </Container>
    </div>
  );
}
