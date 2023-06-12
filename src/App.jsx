import React from "react";
import Jumbotron from "./components/Jumbotron";
import TitleHeader from "./components/TitleHeader";
import Container from "./components/Container";
import Row from "./components/Row";
import Column from "./components/Column";
import Form from "./components/Form";
import Post from "./components/Post";

const App = () => (
  <div>
    <Jumbotron>
      <TitleHeader className="text-center" title="React Form" />
    </Jumbotron>
    <div className="row">
      <div className="col-6">
        <Container>
          <Row>
            <Column className="col-md-6 offset-md-3">
              <Form />
            </Column>
          </Row>
        </Container>
      </div>
      <div className="col-6">
        <Container>
          <Post />
        </Container>
      </div>
    </div>
  </div>
);

export default App;
