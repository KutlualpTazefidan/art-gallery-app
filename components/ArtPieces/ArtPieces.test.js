import { render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";
import ArtPieces from ".";
import { useArtPiecesInfo } from "../../stores/artPiecesInfo";

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
  {
    name: "Blue and Red",
    imageSource: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
    artist: "Jung-Hua Lui",
    slug: "blue-and-red",
  },
];

const favoritePieces = [
  {
    name: "Blue and Red",
    imageSource: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
    artist: "Jung-Hua Lui",
    slug: "blue-and-red",
  },
  {
    name: "Apples and Oranges",
    imageSource: "http://example.org/apples-and-oranges.jpg",
    artist: "Picasso",
    slug: "apples-and-oranges",
  },
];

const slugOfFavoritePieces = ["blue-and-red", "apples-and-oranges"];

// Test for User Story 1
test("list of pieces is displayed", () => {
  render(<ArtPieces pieces={pieces} />);

  const items = screen.getAllByRole("listitem");

  expect(items.length).toBe(3);

  const firstItem = items[0];
  expect(within(firstItem).getByText("My Title")).toBeInTheDocument();

  const secondItem = items[1];
  expect(
    within(secondItem).getByText("Apples and Oranges")
  ).toBeInTheDocument();
});

// Tests for User Story 5
test("favorite-button is displayed", () => {
  render(<ArtPieces pieces={pieces} />);

  const items = screen.getAllByRole("listitem");

  expect(items.length).toBe(3);

  items.forEach((item) => {
    expect(within(item).getByLabelText("favorite-button")).toBeInTheDocument();
  });
});

// Tests for User Story 6
test("All favorite pieces displayed as a list", () => {
  render(<ArtPieces pieces={favoritePieces} />);

  // Favorite images are in a list
  const favoritesList = screen.getByRole("list");
  expect(favoritesList).toBeInTheDocument();

  // Favorite images are displayed in a list
  const favoritesListItems = screen.getAllByRole("listitem");
  expect(favoritesListItems.length).toBe(2);
});

test("Each favorite art piece's image is displayed", () => {
  render(<ArtPieces pieces={favoritePieces} />);

  const imageOfFavoritesPieces = screen.getAllByRole("img");
  expect(imageOfFavoritesPieces.length).toBe(2);
});

test("Each favorite art piece's title is displayed", () => {
  render(<ArtPieces pieces={favoritePieces} />);

  const titleOfFavoritesPieces = screen.getAllByRole("heading");
  expect(titleOfFavoritesPieces.length).toBe(2);
  titleOfFavoritesPieces.map((title, i) =>
    expect(title).toHaveTextContent(favoritePieces[i].name)
  );
});

test("Each favorite art piece's artist is displayed", () => {
  render(<ArtPieces pieces={favoritePieces} />);

  const artistOfFavoritesPieces = screen.getAllByLabelText("artist");
  expect(artistOfFavoritesPieces.length).toBe(2);
  artistOfFavoritesPieces.map((artist, i) =>
    expect(artist).toHaveTextContent(favoritePieces[i].artist)
  );
});

// To test the following the slug of favorites pieces needs to be stored in artPiecesInfo store (global state storage)
test("Each favorite art piece's favorite button is displayed in active state", () => {
  const addToFavorites = useArtPiecesInfo.getState().addToFavorites;
  slugOfFavoritePieces.forEach((slug) => addToFavorites(slug));
  render(<ArtPieces pieces={favoritePieces} />);

  const activeFavoriteButtons = screen.getAllByLabelText(
    "Active Favorite Button"
  );
  expect(activeFavoriteButtons.length).toBe(2);
});
