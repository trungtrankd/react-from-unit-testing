import React from "react";
import Container from "./components/Container";
import Form from "./components/Form";
import Jumbotron from "./components/Jumbotron";
import MultiView from "./components/MultiView";
import Post from "./components/Post";
import TitleHeader from "./components/TitleHeader";

const App = () => (
  <div>
    <Jumbotron>
      <TitleHeader className="text-center" title="React Form" />
    </Jumbotron>
    <div className="row">
      <div className="col-sm-12 col-md-4">
        <Container>
          <Form />
        </Container>
      </div>
      <div className="col-sm-12 col-md-4">
        <Container>
          <Post />
        </Container>
      </div>
      <div className="col-sm-12 col-md-4">
        <Container>
          <MultiView />
        </Container>
      </div>
    </div>
  </div>
);

export default App;
