import React from "react";
import ArtPiecePreview from "../ArtPiecePreview";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
`;

export default function ArtPieces({ pieces }) {
  return (
    <StyledList>
      {pieces.map((piece) => {
        return (
          <li key={piece.slug}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              slug={piece.slug}
            />
          </li>
        );
      })}
    </StyledList>
  );
}
