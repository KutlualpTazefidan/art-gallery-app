import ArtPieces from "../components/ArtPieces";
import { useArtPiecesStore } from "../stores/artPiecesStore";

export default function HomePage() {
  const pieces = useArtPiecesStore((state) => state.pieces);

  return (
    <div>
      <h1>Hello from Next.js</h1>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
