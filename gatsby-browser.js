import React from "react";

import { GigProvider } from "./src/context";

export const wrapRootElement = ({ element }) => (
  <GigProvider>{element}</GigProvider>
);
