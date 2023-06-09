import { act, render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import Form from "../src/components/Form";
import TestWrapper from "./test.wrapper";

describe("<Form>", () => {
  beforeEach(async () => {
    await act(async () => {
      render(
        <TestWrapper>
          <Form />
        </TestWrapper>
      );
    });
  });

  test("<Submit Button>", () => {
    const buttonSubmit = screen.getByTestId("btn-submit");
    expect(buttonSubmit).toBeDefined();
  });

  // test("<Click Submit>", () => {
  //   fireEvent.click(screen.getByTestId("btn-submit"));
  //   const inputError = screen.getByText("Firstname is required");
  //   console.log(inputError);
  // });
});
