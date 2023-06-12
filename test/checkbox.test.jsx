import { act, render } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, test } from "vitest";
import CheckBox from "../src/components/Checkbox";

describe("<CheckBox>", () => {
  beforeEach(async () => {
    await act(async () => {
      render(<CheckBox />);
    });
  });

  test("<CheckBox>", () => {
    expect(render(<CheckBox />)).toMatchSnapshot(
      "./snapshot/checkbox.output.html"
    );
  });
});
