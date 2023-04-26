import { render, screen } from "@testing-library/react";
import ArtPiecePreview from ".";

const title = "My Title";
const artist = "Jane Doe";
const image = "http://example.com/image.jpg";

test("image is displayed", () => {
  render(<ArtPiecePreview image={image} />);

  expect(screen.getByRole("img")).toBeInTheDocument();
});

test("title is displayed", () => {
  render(<ArtPiecePreview title={title} image={image} />);

  expect(screen.getByText(title)).toBeInTheDocument();
});

test("artist is displayed", () => {
  render(<ArtPiecePreview artist={artist} image={image} />);

  expect(screen.getByText(artist)).toBeInTheDocument();
});
