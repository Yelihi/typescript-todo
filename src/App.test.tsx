import React from "react";
import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";

import Router from "./Router";
import { theme } from "./styles/theme";

test("signup renders correctly", () => {
  let { getByText } = render(
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );

  getByText("Create an account");
});
