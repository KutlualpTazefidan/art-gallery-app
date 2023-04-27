import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <div>
      <ArtPiecePreview image={image} title={title} artist={artist} />
      <div>
        Year: <span>{year}</span>
      </div>
      <div>
        Genre: <span>{genre}</span>
      </div>
      <div>
        <button>Back</button>
      </div>
    </div>
  );
}
