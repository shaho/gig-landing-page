import React from "react";
import { render } from "@testing-library/react";

import Card from ".";

describe("Card Component", () => {
  test("should render with given props", () => {
    const { container, getByText } = render(
      <Card title="Simple Title" description="hello world" />,
    );
    expect(container.querySelector("h2")).toBeTruthy();
    expect(getByText("Simple Title")).toBeTruthy();
    expect(container.querySelector("p")).toBeTruthy();
    expect(getByText("hello world")).toBeTruthy();
    expect(container.querySelector(".color-1")).toBeTruthy();
  });

  test("color style", () => {
    const { container, getByText } = render(
      <Card title="Simple Title" description="hello world" color="color-5" />,
    );
    expect(container.querySelector(".color-5")).toBeTruthy();
  });

  test("rotate style", () => {
    const { container, getByText } = render(
      <Card title="Simple Title" description="hello world" rotate />,
    );
    expect(container.querySelector(".rotate")).toBeTruthy();
    expect(container.querySelector(".monochrome")).toBeFalsy();
  });

  test("monochrome style", () => {
    const { container, getByText } = render(
      <Card title="Simple Title" description="hello world" monochrome />,
    );
    expect(container.querySelector(".monochrome")).toBeTruthy();
    expect(container.querySelector(".rotate")).toBeFalsy();
  });
});
