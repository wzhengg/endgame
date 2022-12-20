import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

const fakeProduct = {
  id: "1",
  name: "foo",
  price: 5.0,
  images: [""],
};

describe("product card", () => {
  test("renders product card", () => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    render(<ProductCard product={fakeProduct} formatter={formatter} />);

    const productName = screen.getByRole("heading", { name: "FOO" });
    const productPrice = screen.getByText("$5.00");
    const productImg = screen.getByRole("img");

    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productImg).toBeInTheDocument();
  });
});
