import Link from "next/link";
import React from "react";
import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <li key={piece.slug}>
            <Link href={`/art-pieces/${piece.slug}`}>
              <ArtPiecePreview
                image={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
                slug={piece.slug}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
