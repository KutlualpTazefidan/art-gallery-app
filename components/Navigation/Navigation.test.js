import { render, screen } from "@testing-library/react";
import Navigation from ".";

test('link labeled "Spotlight" is displayed', () => {
  render(<Navigation />);

  expect(screen.getByRole("link", { name: "Spotlight" })).toBeInTheDocument();
});

test('link labeled "Pieces" is displayed', () => {
  render(<Navigation />);

  expect(screen.getByRole("link", { name: "Pieces" })).toBeInTheDocument();
});

test('link labeled "Favorites" is displayed', () => {
  render(<Navigation />);

  expect(screen.getByRole("link", { name: "Favorites" })).toBeInTheDocument();
});
