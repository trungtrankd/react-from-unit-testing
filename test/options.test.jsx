import { render } from "@testing-library/react";
import React from "react";
import { describe, test } from "vitest";
import Options from "../src/components/Options";

const options = ["English", "Spanish", "German", "French"];
describe("<Options />", () => {
  test("Should render correctly", () => {
    const component = render(<Options options={options} />);
    expect(component).toMatchSnapshot("./snapshot/options.output.html");
  });
});
