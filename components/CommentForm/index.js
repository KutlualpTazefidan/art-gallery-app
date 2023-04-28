import { uid } from "uid";

export default function CommentForm({ onSubmitComment }) {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const commentInput = form.elements.comment;

    onSubmitComment({ id: uid(), text: commentInput.value });

    commentInput.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea rows="3" id="comment" name="comment" />
      <button>Send</button>
    </form>
  );
}
