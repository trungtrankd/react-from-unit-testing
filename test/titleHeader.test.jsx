import { render } from "@testing-library/react";
import React from "react";
import { describe, test } from "vitest";
import TitleHeader from './../src/components/TitleHeader';

describe("<TitleHeader />", () => {
  test("Should render correctly", () => {
    const component = render(<TitleHeader />);
    expect(component).toMatchSnapshot("./snapshot/titleHeader.output.html");
  });
});
