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

const StyledArticle = styled.article`
  background-color: black;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 1rem 0rem 1rem 1rem;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  left: calc(50% - ((425px) / 2));
  .container-for-artist-favorite {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .container-for-artist-favorite > button {
    /* position: absolute; */
    /* top: 1rem; */
    /* right: 1rem; */
    font-size: 2rem;
  }
  .artist-name {
    writing-mode: vertical-rl;
  }
  .container-for-img-title-favorite {
    display: flex;
  }
  .image-title {
    width: 100%;
    text-align: left;
    /* left: 0; */
    /* width: 300px; */
  }
  .color-palette {
    display: flex;
    flex-direction: column;
  }
  svg {
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  }
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
    <StyledArticle>
      <div className="container-for-img-title-favorite">
        {image && (
          <Image
            src={image}
            width={300}
            height={300}
            alt={`Image titled ${title}`}
          ></Image>
        )}
        <div className="container-for-artist-favorite">
          <FavoriteButton
            isFavorite={isFavorite}
            onToggleFavorite={handleToggleFavorite}
          />
          <div aria-label="Color Palette" className="color-palette">
            {colors?.map((color, i) => (
              <StyledSpanCircle
                key={i}
                color={color}
                aria-label="Colored circle for the color palette"
              />
            ))}
          </div>
          <span aria-label="artist" className="artist-name">
            {artist}
          </span>
        </div>
      </div>
      {title && <caption className="image-title">{title}</caption>}
    </StyledArticle>
  );
}
