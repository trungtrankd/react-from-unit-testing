import { render } from "@testing-library/react";
import React from "react";
import { describe, test } from "vitest";
import TextInput from "./../src/components/TextInput";

describe("<TextInput />", () => {
  test("Should render correctly", () => {
    const component = render(<TextInput />);
    expect(component).toMatchSnapshot("./snapshot/textInput.output.html");
  });
});
