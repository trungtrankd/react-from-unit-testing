import React from "react";
import { render } from "@testing-library/react";
import { describe } from "vitest";
import Column from "../src/components/Column";

describe("<Column />", () => {
  test("Should render correctly", () => {
    const component = render(<Column />);
    expect(component).toMatchSnapshot("./snapshot/column.output.html");
  });
});
