import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CarouselArrow from "./CarouselArrow";

describe("carousel arrows", () => {
  test("renders carousel button", () => {
    const onClickMock = jest.fn();
    render(<CarouselArrow onClick={onClickMock} direction="left" />);

    const btn = screen.getByRole("button");

    expect(btn).toBeInTheDocument();
  });

  test("renders prev button on left", () => {
    const onClickMock = jest.fn();
    render(<CarouselArrow onClick={onClickMock} direction="left" />);

    const btn = screen.getByRole("button");

    expect(btn.className).toMatch(/left/);
    expect(btn.className).not.toMatch(/right/);
  });

  test("renders next button on right", () => {
    const onClickMock = jest.fn();
    render(<CarouselArrow onClick={onClickMock} direction="right" />);

    const btn = screen.getByRole("button");

    expect(btn.className).toMatch(/right/);
    expect(btn.className).not.toMatch(/left/);
  });

  test("calls onClick correct number of times", () => {
    const onClickMock = jest.fn();
    render(<CarouselArrow onClick={onClickMock} direction="left" />);

    const btn = screen.getByRole("button");
    userEvent.click(btn);
    userEvent.click(btn);

    expect(onClickMock).toHaveBeenCalledTimes(2);
  });
});
