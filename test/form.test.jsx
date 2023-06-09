import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, test } from "vitest";
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

  test("<Require fist name>", async () => {
    await act(async () => {
      fireEvent.click(screen.getByTestId("btn-submit"));
    });
    expect(screen.getByTestId("firstname-error")).toBeDefined();
  });

  test("<Require last name>", async () => {
    await act(async () => {
      fireEvent.click(screen.getByTestId("btn-submit"));
    });
    expect(screen.getByTestId("lastname-error")).toBeDefined();
  });

  test("<Required email>", async () => {
    await act(async () => {
      fireEvent.click(screen.getByTestId("btn-submit"));
    });
    expect(screen.getByTestId("email-error")).toBeDefined();
  });

  test("<Valid email>", async () => {
    await act(async () => {
      fireEvent.change(screen.getByTestId("control-firstname"), {
        target: {
          value: "Khang",
        },
      });
      fireEvent.change(screen.getByTestId("control-lastname"), {
        target: {
          value: "Truong",
        },
      });
      fireEvent.change(screen.getByTestId("control-email"), {
        target: {
          value: "khang.truong",
        },
      });
      fireEvent.click(screen.getByTestId("btn-submit"));
    });
    expect(screen.getByTestId("email-error")).toBeDefined();
  });
});
