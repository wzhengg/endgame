import { render, screen } from "@testing-library/react";
import ProductCarousel from "./ProductCarousel";

jest.mock("../ProductCaption/ProductCaption", () => () => (
  <div data-testid="product-caption" />
));

jest.mock("../CarouselArrow/CarouselArrow", () => () => (
  <button type="button" data-testid="arrow-btns" />
));

describe("featured products carousel", () => {
  test("renders product carousel", () => {
    render(<ProductCarousel />);

    const productImg = screen.getByTestId("product-img");
    const productCaption = screen.getByTestId("product-caption");
    const btns = screen.getAllByTestId("arrow-btns");
    const indicators = screen.getByTestId("indicators");

    expect(productImg).toBeInTheDocument();
    expect(productCaption).toBeInTheDocument();
    expect(btns).toHaveLength(2);
    expect(indicators).toBeInTheDocument();
  });
});
