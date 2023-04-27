import Spotlight from "../components/Spotlight";
import { useArtPiecesStore } from "../stores/artPiecesStore";

export default function SpotlightPage() {
  const pieces = useArtPiecesStore((state) => state.pieces);

  function chooseRandomPiece(pieces) {
    const randomNumber = Math.floor(Math.random() * pieces.length);
    return pieces[randomNumber];
  }

  if (pieces.length === 0) {
    return <div>Loading...</div>;
  }

  const piece = chooseRandomPiece(pieces);

  return (
    <Spotlight
      image={piece.imageSource}
      artist={piece.artist}
      slug={piece.slug}
    />
  );
}
