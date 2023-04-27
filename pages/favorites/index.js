import ArtPieces from "../../components/ArtPieces";
import { useArtPiecesStore } from "../../stores/artPiecesStore";
import { useArtPiecesInfo } from "../../stores/artPiecesInfo";

export default function FavoritesPage() {
  const pieces = useArtPiecesStore((state) => state.pieces);
  const slugOfFavoritePieces = useArtPiecesInfo(
    (state) => state.favoritePieces
  );
  const favoritePieces = pieces.filter((piece) =>
    slugOfFavoritePieces.includes(piece.slug)
  );
  return (
    <div>
      {console.log("pieces", pieces)}
      {console.log("favorites", favoritePieces)}
      {console.log("favoritesSlug", slugOfFavoritePieces)}
      <ArtPieces pieces={favoritePieces} />
    </div>
  );
}
