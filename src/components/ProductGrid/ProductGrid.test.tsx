import { screen, render } from "@testing-library/react";
import ProductGrid from "./ProductGrid";

const fakeData = [
  {
    category: "category 1",
    products: [
      {
        name: "p1",
        price: 1,
        imgs: [""],
      },
      {
        name: "p2",
        price: 2,
        imgs: [""],
      },
      {
        name: "p3",
        price: 3,
        imgs: [""],
      },
    ],
  },
  {
    category: "category 2",
    products: [
      {
        name: "product 1",
        price: 1,
        imgs: [""],
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
});
