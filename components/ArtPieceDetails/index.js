import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  colors,
  onBack,
}) {
  return (
    <div>
      <ArtPiecePreview
        image={image}
        title={title}
        artist={artist}
        colors={colors}
      />
      <div>
        Year: <span>{year}</span>
      </div>
      <div>
        Genre: <span>{genre}</span>
      </div>
      <div>
        <button onClick={onBack}>Back</button>
      </div>
      <h3>Comments</h3>
      <input id="comment" type="text" />
    </div>
  );
}
