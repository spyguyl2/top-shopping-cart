import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import SpinButton from "../src/components/SpinButton";

describe("SpinButton component", () => {
  it("Renders component", () => {
    const container = render(<SpinButton />);
    expect(container).toMatchSnapshot();
  });
});
