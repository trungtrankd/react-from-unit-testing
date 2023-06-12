import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import Post from "../src/components/Post";

// mocking
const post = {
  userId: 1,
  id: 1,
  title:
    "unt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

// setup server
export const restHandlers = [
  rest.get("https://jsonplaceholder.typicode.com/posts/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(post));
  }),
];
const server = setupServer(...restHandlers);
beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
});
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

// testing
describe("<Mocking testing>", () => {
  test("<get Post>", async () => {
    render(<Post />);
    await waitForElementToBeRemoved(() => screen.queryByLabelText("loading"));
    expect(
      screen.getByRole("heading", { name: post.title, level: 2 })
    ).toBeDefined();
    expect(screen.getByTestId('post-body').innerHTML).toBeDefined(post.body);
  });
});
