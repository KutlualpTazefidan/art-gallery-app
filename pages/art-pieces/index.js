import ArtPieces from "../../components/ArtPieces";
import { useArtPiecesStore } from "../../stores/artPiecesStore";

export default function ArtPiecesPage() {
  const pieces = useArtPiecesStore((state) => state.pieces);

  return (
    <div>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
