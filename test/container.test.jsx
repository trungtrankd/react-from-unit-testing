import React from "react";
import { render } from "@testing-library/react";
import Container from './../src/components/Container';

describe("<Container />", () => {
  it("Should render correctly", () => {
    const component = render(<Container />);
    expect(component).toMatchSnapshot("./snapshot/container.output.html");
  });
});
