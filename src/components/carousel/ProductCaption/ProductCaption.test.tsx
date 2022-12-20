import { render, screen } from "@testing-library/react";
import ProductCaption from "./ProductCaption";

const fakeProduct = {
  id: "1",
  name: "foo",
  description: "bar",
};

describe("product caption", () => {
  test("renders caption", () => {
    render(<ProductCaption product={fakeProduct} />);

    const productName = screen.getByRole("heading", { name: "foo" });
    const productDesc = screen.getByText("bar");
    const buyBtn = screen.getByRole("button", { name: "BUY NOW" });

    expect(productName).toBeInTheDocument();
    expect(productDesc).toBeInTheDocument();
    expect(buyBtn).toBeInTheDocument();
  });
});
