import { act, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import MultiView from "../src/components/MultiView";

describe("<Multiple testing>", async () => {
  test("<Render desktop view>", async () => {
    render(<MultiView />);
    act(() => {
      global.innerWidth = 1028;
      global.dispatchEvent(new Event("resize"));
    });
    expect(screen.getByTestId("desktop-view")).toBeDefined();
  });

  test("<Render mobile view>", async () => {
    render(<MultiView />);
    act(() => {
      global.innerWidth = 768;
      global.dispatchEvent(new Event("resize"));
    });
    expect(screen.getByTestId("mobile-view")).toBeDefined();
  });
});
