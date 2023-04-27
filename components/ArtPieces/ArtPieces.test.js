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

test("favorite-button is displayed", () => {
  render(<ArtPieces pieces={pieces} />);

  const items = screen.getAllByRole("listitem");

  expect(items.length).toBe(3);

  items.forEach((item) => {
    expect(within(item).getByLabelText("favorite-button")).toBeInTheDocument();
  });
});

test("All favorite pieces displayed as a list", async () => {
  render(<ArtPieces pieces={favoritePieces} />);

  // Favorite images are in a list
  const favoritesList = screen.getByRole("list");
  expect(favoritesList).toBeInTheDocument();

  // Favorite images are displayed in a list
  const favoritesListItems = screen.getAllByRole("listitem");
  expect(favoritesListItems.length).toBe(2);
});

test("Each favorite art pieces image is displayed", async () => {
  render(<ArtPieces pieces={favoritePieces} />);

  const imagesOfFavoritesPieces = screen.getAllByRole("img");
  expect(imagesOfFavoritesPieces.length).toBe(2);
});

// const slugsOfFavoritePieces = ["my-title", "apples-and-oranges"];

// const addToFavorites = useArtPiecesInfo.getState().addToFavorites;
// addToFavorites(slugsOfFavoritePieces);
// const favoritePieces = useArtPiecesInfo.getState().favoritePieces;

// await user.click(favoriteButton);

// expect(favoritePieces).not.toContain(slug);
