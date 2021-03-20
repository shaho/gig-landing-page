import React from "react";
import { render, fireEvent } from "@testing-library/react";

import HambergerMenu from ".";

const actions = {
  randomizeColors: jest.fn(() => console.log("randomizeColors")),
  handleMonochrome: jest.fn(() => console.log("handleMonochrome")),
  handleRotateTexts: jest.fn(() => console.log("handleRotateTexts")),
  swicthLanguage: jest.fn(() => console.log("swicthLanguage")),
};

describe("HambergerMenu Component", () => {
  test("should render", () => {
    const { container } = render(
      <HambergerMenu lang="en" monochromed rotateText actions={actions} />,
    );
    expect(container).toBeTruthy();
  });
  test("randomizeColors()", () => {
    const { container } = render(
      <HambergerMenu lang="en" monochromed rotateText actions={actions} />,
    );
    const btn = container.querySelector(".random-btn");
    fireEvent.click(btn);
    expect(actions.randomizeColors).toHaveBeenCalledTimes(1);
  });
  test("handleMonochrome()", () => {
    const { container, getByText } = render(
      <HambergerMenu
        lang="en"
        monochromed={false}
        rotateText
        actions={actions}
      />,
    );
    expect(getByText("Monochrome is off")).toBeTruthy();
    const btn = container.querySelector(".mono-btn");
    fireEvent.click(btn);
    expect(actions.handleMonochrome).toHaveBeenCalledTimes(1);
  });
});
