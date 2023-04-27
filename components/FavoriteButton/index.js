import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <StyledButton onClick={onToggleFavorite}>
      {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
    </StyledButton>
  );
}
