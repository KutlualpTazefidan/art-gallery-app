import ArtPiecePreview from "../ArtPiecePreview";
import styled from "styled-components";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import CommentForm from "../CommentForm";
import Comments from "../Comments";

import { useArtPiecesInfo } from "../../stores/artPiecesInfo";

const StyledDetailsSection = styled.section`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .piece-description {
    margin-top: 0.5rem;
    width: 300px;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  > button {
    font-family: inherit;
    letter-spacing: 0.2rem;
    background: transparent;
    border: solid 1px transparent;
    border-radius: 1rem;
    color: var(--primary-color);
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    transition: 0.2s;
    box-shadow: 0 0px 28px rgba(0, 0, 0, 0.25), 0 0px 10px rgba(0, 0, 0, 0.22);
    background-color: rgba(255, 255, 255, 0.1);
    &:hover {
      border-color: var(--white);
      box-shadow: 0 0px 6px rgba(255, 255, 255, 0.5),
        0 0px 2px rgba(255, 255, 255, 0.5);
      color: var(--text-color);
    }
    &:active {
      background-color: var(--third-color);
      border-color: var(--third-color);
      color: var(--third-color);
      box-shadow: none;
    }
  }
`;

const StyledCommentContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
`;

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
    <div className="detailed-page">
      <ArtPiecePreview
        image={image}
        title={title}
        artist={artist}
        colors={colors}
        details={
          <StyledDetailsSection className="details">
            <div>
              Year: <span>{year}</span>
            </div>
            <div>
              Genre: <span>{genre}</span>
            </div>
            <div className="piece-description">
              Description:{" "}
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                distinctio minima perferendis odit voluptatem ab a quae
                suscipit, recusandae iure est facere repudiandae.
              </span>
            </div>
          </StyledDetailsSection>
        }
      />

      <StyledButtonContainer className="button-container">
        <button onClick={onBack}>
          <HiOutlineArrowCircleLeft className="back-arrow" /> Back
        </button>
      </StyledButtonContainer>
      <StyledCommentContainer
        data-testid="comments"
        className="comment-section"
      >
        <h3>Comments</h3>
        <Comments comments={comments} />
        <CommentForm onSubmitComment={handleSubmitComment} />
      </StyledCommentContainer>
    </div>
  );
}
