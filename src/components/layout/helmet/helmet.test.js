import React from "react";
import { render, waitFor } from "@testing-library/react";

import HelmetProvider from ".";

describe("HelmetProvider Component", () => {
  test("Enlish language", async () => {
    const { container } = render(<HelmetProvider lang="en" />);
    expect(container).toBeTruthy();
    await waitFor(() => expect(document.title).toEqual("GiG - Home Page"));
  });

  test("Swedish language", async () => {
    const { container } = render(<HelmetProvider lang="sv" />);
    expect(container).toBeTruthy();
    await waitFor(() => expect(document.title).toEqual("GiG - Hemsida"));
  });
});
