import React from "react";
import { render } from "@testing-library/react";
import MultiSelect from "./../src/components/MultiSelect";

describe("<MultiSelect />", () => {
  test("Should render correctly", () => {
    const component = render(<MultiSelect />);
    expect(component).toMatchSnapshot("./snapshot/multiselect.output.html");
  });
});
