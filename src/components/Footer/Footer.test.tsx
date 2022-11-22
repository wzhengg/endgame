import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("footer", () => {
  test("renders footer", () => {
    render(<Footer />);

    const headings = screen.getAllByRole("heading");
    const columns = screen.getAllByTestId("column");
    const links = screen.getAllByTestId("link");

    expect(headings).toHaveLength(3);
    expect(columns).toHaveLength(3);
    expect(links).toHaveLength(4);
  });
});
