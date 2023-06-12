import React from "react";
import { render } from "@testing-library/react";
import Jumbotron from "./../src/components/Jumbotron";

describe("<Jumbotron />", () => {
  test("Should render correctly", () => {
    const label = "test jumbotron";
    const component = render(<Jumbotron children={label} />);
    expect(component).toMatchSnapshot("./snapshot/jumbotron.output.html");
  });
});
