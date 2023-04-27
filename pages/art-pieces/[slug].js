import { useRouter } from "next/router";
import Error from "next/error";

import ArtPieceDetails from "../../components/ArtPieceDetails";

import { useArtPiecesStore } from "../../stores/artPiecesStore";

function getPieceBySlug(pieces, slug) {
  return pieces.find((piece) => piece.slug === slug);
}

export default function ArtPieceDetailsPage() {
  const {
    query: { slug },
    push: routerPush,
  } = useRouter();

  const pieces = useArtPiecesStore((state) => state.pieces);

  const piece = getPieceBySlug(pieces, slug);

  if (!piece) {
    return (
      <Error statusCode={404} title="this piece of art is not known to us" />
    );
  }

  return (
    <div>
      <ArtPieceDetails
        image={piece.imageSource}
        title={piece.name}
        artist={piece.artist}
        year={piece.year}
        genre={piece.genre}
        onBack={() => routerPush("/art-pieces")}
      />
    </div>
  );
}
