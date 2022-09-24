import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("header", () => {
  test("renders header", () => {
    render(<Header />);

    const logo = screen.getByRole("heading", { name: "ENDGAME" });
    const links = screen.getAllByRole("listitem");
    const buttons = screen.getAllByRole("img");

    expect(logo).toBeInTheDocument();
    expect(links).toHaveLength(4);
    expect(buttons).toHaveLength(2);
  });
});
