import { describe, expect, test } from "vitest";
import { compare } from "../src/utils/compare";

describe("<Function logic>", () => {
  test("<Compare 1> ", () => {
    const a = [1, 2, 3];
    const b = [3, 2, 1];
    expect(compare(a, b)).toEqual("1 1");
  });

  test("<Compare 2> ", () => {
    const a = [5, 6, 7];
    const b = [3, 6, 10];
    expect(compare(a, b)).toEqual("1 1");
  });

  test("<Compare 3> ", () => {
    const a = [17 , 28 , 30];
    const b = [99 , 16 , 8];
    expect(compare(a, b)).toEqual("2 1");
  });
});
