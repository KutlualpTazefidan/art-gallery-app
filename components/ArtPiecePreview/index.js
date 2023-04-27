import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import { useArtPiecesInfo } from "../../stores/artPiecesInfo";
import styled from "styled-components";

const StyledSpanCircle = styled.span`
  height: 25px;
  width: 25px;
  background-color: ${(props) => props.color || "white"};
  border-radius: 50%;
  display: inline-block;
`;

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  colors,
}) {
  // const slug = 1;
  const favoritePieces = useArtPiecesInfo((state) => state.favoritePieces);
  const addToFavorites = useArtPiecesInfo((state) => state.addToFavorites);
  const removeFavorite = useArtPiecesInfo((state) => state.removeFavorite);

  const isFavorite = favoritePieces.includes(slug);

  function handleToggleFavorite() {
    if (!favoritePieces.includes(slug)) {
      addToFavorites(slug);
    } else {
      removeFavorite(slug);
    }
  }
  return (
    <article>
      {title && <h3>{title}</h3>}
      {image && (
        <Image
          src={image}
          width={300}
          height={300}
          alt={`Image titled ${title}`}
        ></Image>
      )}
      <div>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={handleToggleFavorite}
        />{" "}
        <span aria-label="artist">{artist}</span>
      </div>
      <div aria-label="Color Palette">
        {colors?.map((color, i) => (
          <StyledSpanCircle
            key={i}
            color={color}
            aria-label="Colored circle for the color palette"
          />
        ))}
      </div>
    </article>
  );
}
