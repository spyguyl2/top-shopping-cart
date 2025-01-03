import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders component", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
