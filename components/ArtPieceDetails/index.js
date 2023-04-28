import ArtPiecePreview from "../ArtPiecePreview";
import CommentForm from "../CommentForm";
import Comments from "../Comments";

import { useArtPiecesInfo } from "../../stores/artPiecesInfo";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  colors,
  slug,
  onBack,
}) {
  const commentsBySlug = useArtPiecesInfo((state) => state.commentsBySlug);
  const addComment = useArtPiecesInfo((state) => state.addComment);
  const comments = commentsBySlug[slug];

  function handleSubmitComment(comment) {
    addComment(slug, comment);
  }

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
        <Comments comments={comments} />
        <CommentForm onSubmitComment={handleSubmitComment} />
      </section>
    </div>
  );
}
