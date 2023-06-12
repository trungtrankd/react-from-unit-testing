import React from "react";
import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import Button from "./../src/components/Button";

describe("<Button>", () => {
  test("Should render correctly", () => {
    const component = render(<Button />);
    expect(component).toMatchSnapshot("./snapshot/button.output.html");
  });
});
