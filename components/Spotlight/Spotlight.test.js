import { render, screen } from "@testing-library/react";
import Spotlight from ".";

const piece = {
  name: "My Title",
  imageSource: "http://example.org/my-title.jpg",
  artist: "Jane Doe",
  slug: "my-title",
};

test("Spotlight image is displayed", () => {
  render(<Spotlight image={piece.imageSource} artist={piece.artist} />);

  expect(screen.getByRole("img")).toBeInTheDocument();
});

test("Spotlight artist is displayed", () => {
  render(<Spotlight image={piece.imageSource} artist={piece.artist} />);

  expect(screen.getByText(piece.artist)).toBeInTheDocument();
});

test("Spotlight title is not displayed", () => {
  render(<Spotlight image={piece.imageSource} artist={piece.artist} />);

  expect(screen.queryByRole("heading")).not.toBeInTheDocument();
});
