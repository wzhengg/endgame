import { render, screen } from "@testing-library/react";
import ProductCarousel from "./ProductCarousel";

jest.mock("../ProductCaption/ProductCaption", () => () => (
  <div data-testid="product-caption" />
));

jest.mock("../CarouselArrow/CarouselArrow", () => () => (
  <button type="button" data-testid="arrow-btns" />
));

const data = [
  { name: "product 1", description: "desc", image: "" },
  { name: "product 2", description: "desc", image: "" },
  { name: "product 3", description: "desc", image: "" },
];

describe("featured products carousel", () => {
  test("renders product carousel", () => {
    render(<ProductCarousel data={data} />);

    const productImg = screen.getByTestId("product-img");
    const productCaption = screen.getByTestId("product-caption");
    const btns = screen.getAllByTestId("arrow-btns");
    const indicators = screen.getByTestId("indicators");

    expect(productImg).toBeInTheDocument();
    expect(productCaption).toBeInTheDocument();
    expect(btns).toHaveLength(2);
    expect(indicators).toBeInTheDocument();
  });

  test("renders loading screen when there's no data", () => {
    render(<ProductCarousel data={[]} />);
    const loadingText = screen.getByRole("heading", { name: "LOADING..." });
    expect(loadingText).toBeInTheDocument();
  });
});
