import { render, screen } from "@testing-library/react";
import ArtPieceDetails from ".";

const title = "My Title";
const artist = "Jane Doe";
const image = "http://example.com/image.jpg";
const year = 1910;
const genre = "pop art";

test("image is displayed", () => {
  render(<ArtPieceDetails image={image} />);

  expect(screen.getByRole("img")).toBeInTheDocument();
});

test("title is displayed", () => {
  render(<ArtPieceDetails title={title} />);

  expect(screen.getByText(title)).toBeInTheDocument();
});

test("artist is displayed", () => {
  render(<ArtPieceDetails artist={artist} />);

  expect(screen.getByText(artist)).toBeInTheDocument();
});

test("year is displayed", () => {
  render(<ArtPieceDetails year={year} />);

  expect(screen.getByText(year)).toBeInTheDocument();
});

test("genre is displayed", () => {
  render(<ArtPieceDetails genre={genre} />);

  expect(screen.getByText(genre)).toBeInTheDocument();
});

test("back-button is displayed", () => {
  render(<ArtPieceDetails />);

  expect(screen.getByRole("button", { name: "Back" })).toBeInTheDocument();
});
