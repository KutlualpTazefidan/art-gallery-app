import { render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";
import ArtPieces from ".";

const pieces = [
  {
    name: "My Title",
    imageSource: "http://example.org/my-title.jpg",
    artist: "Jane Doe",
    slug: "my-title",
  },
  {
    name: "Apples and Oranges",
    imageSource: "http://example.org/apples-and-oranges.jpg",
    artist: "Picasso",
    slug: "apples-and-oranges",
  },
];

test("list of pieces is displayed", () => {
  render(<ArtPieces pieces={pieces} />);

  const items = screen.getAllByRole("listitem");

  expect(items.length).toBe(2);

  const firstItem = items[0];
  expect(within(firstItem).getByText("My Title")).toBeInTheDocument();

  const secondItem = items[1];
  expect(
    within(secondItem).getByText("Apples and Oranges")
  ).toBeInTheDocument();
});

test("favorite-button is displayed", () => {
  render(<ArtPieces pieces={pieces} />);

  const items = screen.getAllByRole("listitem");

  expect(items.length).toBe(2);

  const firstItem = items[0];
  expect(within(firstItem).getByText("My Title")).toBeInTheDocument();

  const secondItem = items[1];
  expect(
    within(secondItem).getByText("Apples and Oranges")
  ).toBeInTheDocument();
});
