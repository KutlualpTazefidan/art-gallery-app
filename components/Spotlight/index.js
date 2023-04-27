import ArtPiecePreview from "../ArtPiecePreview";

export default function Spotlight({ image, artist, slug }) {
  return (
    <div>
      <ArtPiecePreview image={image} artist={artist} slug={slug} />
    </div>
  );
}
