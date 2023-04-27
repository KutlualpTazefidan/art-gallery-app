import { render, screen } from "@testing-library/react";
import ArtPiecePreview from ".";
import userEvent from "@testing-library/user-event";
import { useArtPiecesInfo } from "../../stores/artPiecesInfo";

const title = "My Title";
const artist = "Jane Doe";
const image = "http://example.com/image.jpg";
const slug = "my-slug";

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

test("Piece added to favorites pieces", async () => {
  const user = userEvent.setup();

  render(<ArtPiecePreview artist={artist} image={image} slug={slug} />);

  const favoriteButton = screen.getByLabelText("favorite-button");
  expect(favoriteButton).toBeInTheDocument();

  await user.click(favoriteButton);

  const favoritePieces = useArtPiecesInfo.getState().favoritePieces;
  expect(favoritePieces).toContain(slug);
});

test("Piece removed to favorites pieces", async () => {
  const user = userEvent.setup();

  const addToFavorites = useArtPiecesInfo.getState().addToFavorites;
  addToFavorites(slug);

  render(<ArtPiecePreview artist={artist} image={image} slug={slug} />);

  const favoriteButton = screen.getByLabelText("favorite-button");
  expect(favoriteButton).toBeInTheDocument();

  await user.click(favoriteButton);

  const favoritePieces = useArtPiecesInfo.getState().favoritePieces;
  expect(favoritePieces).not.toContain(slug);
});
