import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "../src/components/Card";
import userEvent from "@testing-library/user-event";

describe("Card component", () => {
  it("Renders component", () => {
    const container = render(<Card />);
    expect(container).toMatchSnapshot();
  });

  it("Accepts typed numbers", async () => {
    const user = userEvent.setup();

    render(<Card />);
    const input = screen.getByRole("spinbutton");

    await user.click(input);
    await user.keyboard("45");

    expect(input.value).toMatch("45");
  });

  it("Does not accept other characters", async () => {
    const user = userEvent.setup();

    render(<Card />);
    const input = screen.getByRole("spinbutton");

    await user.click(input);
    await user.keyboard("dsf@#");

    expect(input.value).toMatch("0");
  });

  it("Returns to min when a number below min is entered", async () => {
    const user = userEvent.setup();

    render(<Card />);
    const input = screen.getByRole("spinbutton");

    await user.keyboard("45");
    await user.keyboard("-50");

    expect(input.value).toMatch("0");
  });

  it("Returns to max when a number above max is entered", async () => {
    const user = userEvent.setup();

    render(<Card />);
    const input = screen.getByRole("spinbutton");

    await user.click(input);
    await user.keyboard("45");
    await user.keyboard("101");

    expect(input.value).toMatch("99");
  });

  it("Increases input value by 1 when plus is clicked", async () => {
    const user = userEvent.setup();

    render(<Card />);
    const plusButton = screen.getByRole("button", { name: "plus" });

    await user.click(plusButton);

    expect(screen.getByRole("spinbutton").value).toMatch("1");
  });

  it("Decreases input value by 1 when minus is clicked", async () => {
    const user = userEvent.setup();

    render(<Card />);
    const minusButton = screen.getByRole("button", { name: "minus" });
    const input = screen.getByRole("spinbutton");

    await user.click(input);
    await user.keyboard("2");
    await user.click(minusButton);

    expect(input.value).toMatch("1");
  });

  it("Does not go under the min value when minus is clicked.", async () => {
    const user = userEvent.setup();

    render(<Card />);
    const minusButton = screen.getByRole("button", { name: "minus" });
    const input = screen.getByRole("spinbutton");

    await user.click(minusButton);

    expect(input.value).toMatch("0");
  });

  it("Does not go over the max value when plus is clicked", async () => {
    const user = userEvent.setup();

    render(<Card />);
    const plusButton = screen.getByRole("button", { name: "plus" });
    const input = screen.getByRole("spinbutton");

    await user.click(input);
    await user.keyboard("99");
    await user.click(plusButton);

    expect(input.value).toMatch("99");
  });
});
