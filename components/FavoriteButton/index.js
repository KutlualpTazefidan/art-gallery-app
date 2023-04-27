import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <StyledButton onClick={onToggleFavorite} aria-label={"favorite-button"}>
      {isFavorite ? (
        <AiFillHeart aria-label="Active Favorite Button" />
      ) : (
        <AiOutlineHeart aria-label="Active Favorite Button" />
      )}
    </StyledButton>
  );
}
