import React from "react";
import { render } from "@testing-library/react";

import Layout from ".";

describe("Layout Component", () => {
  test("should render children", async () => {
    const { container, getByText } = render(<Layout>hello</Layout>);
    expect(container).toBeTruthy();
    expect(container.querySelector(".wrapper")).toBeTruthy();
    expect(getByText("hello")).toBeTruthy();
  });
});
