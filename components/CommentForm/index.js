import styled from "styled-components";

const StyledButton = styled.button`
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
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function CommentForm({ onSubmitComment }) {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const commentInput = form.elements.comment;

    onSubmitComment({ text: commentInput.value });

    commentInput.value = "";
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <textarea rows="3" id="comment" name="comment" /> <br />
      <StyledButton>Send</StyledButton>
    </StyledForm>
  );
}
