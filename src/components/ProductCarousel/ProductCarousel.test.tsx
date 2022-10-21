import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCarousel from "./ProductCarousel";

describe("featured products carousel", () => {
  test("renders product carousel", () => {
    render(<ProductCarousel />);

    const productImg = screen.getByTestId("product-img");
    const productName = screen.getByRole("heading");
    const productCaption = screen.getByTestId("product-caption");
    const buyBtn = screen.getByRole("button", { name: "BUY NOW" });
    const prevBtn = screen.getByTestId("prev-btn");
    const nextBtn = screen.getByTestId("next-btn");
    const indicators = screen.getByTestId("indicators");

    expect(productImg).toBeInTheDocument();
    expect(productName).toBeInTheDocument();
    expect(productCaption).toBeInTheDocument();
    expect(buyBtn).toBeInTheDocument();
    expect(prevBtn).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();
    expect(indicators).toBeInTheDocument();
  });

  test("changes product when prev and next buttons are clicked", () => {
    render(<ProductCarousel />);

    const prevBtn = screen.getByTestId("prev-btn");
    const nextBtn = screen.getByTestId("next-btn");

    const productImg = screen.getByTestId("product-img") as HTMLImageElement;
    const src = productImg.src;

    userEvent.click(prevBtn);
    expect(src).not.toEqual(productImg.src);

    userEvent.click(nextBtn);
    userEvent.click(nextBtn);
    expect(src).not.toEqual(productImg.src);
  });
});
