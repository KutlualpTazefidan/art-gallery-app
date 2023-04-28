import ArtPiecePreview from "../ArtPiecePreview";
import CommentForm from "../CommentForm";
import Comments from "../Comments";

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
      <section data-testid="comments">
        <h3>Comments</h3>
        <Comments />
        <CommentForm />
      </section>
    </div>
  );
}
