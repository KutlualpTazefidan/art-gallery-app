import ArtPiecePreview from "../ArtPiecePreview";

export default function Spotlight({ image, artist }) {
  return (
    <div>
      <ArtPiecePreview image={image} artist={artist} />
    </div>
  );
}
