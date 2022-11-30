import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductGrid from "./ProductGrid";

jest.mock("../ProductCard/ProductCard", () => () => (
  <div data-testid="product-card" />
));

const fakeData = [
  {
    category: "foo",
    products: [
      {
        name: "foo1",
        price: 1,
        images: [""],
      },
      {
        name: "foo2",
        price: 2,
        images: [""],
      },
      {
        name: "foo3",
        price: 3,
        images: [""],
      },
    ],
  },
  {
    category: "bar",
    products: [
      {
        name: "bar1",
        price: 1,
        images: [""],
      },
    ],
  },
];

describe("product grid", () => {
  test("renders product grid", () => {
    render(<ProductGrid data={fakeData} />);

    const heading = screen.getByRole("heading", {
      name: "FEATURED COLLECTIONS",
    });
    const categoryBtns = screen.getAllByTestId("category-btn");
    const productCards = screen.getAllByTestId("product-card");

    expect(heading).toBeInTheDocument();
    expect(categoryBtns).toHaveLength(2);
    expect(productCards).toHaveLength(3);
  });

  test("changes products when another category is selected", () => {
    render(<ProductGrid data={fakeData} />);

    const btn = screen.getByRole("button", { name: "BAR" });
    userEvent.click(btn);
    const productCards = screen.getAllByTestId("product-card");

    expect(productCards).toHaveLength(1);
  });
});
