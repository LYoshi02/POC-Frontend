import { render, screen } from "@testing-library/react";

import App from "./app";

it("renders Vite heading", () => {
  render(<App />);

  const viteHeading = screen.getByRole("heading", { name: /vite/i });

  expect(viteHeading).toBeInTheDocument();
});
