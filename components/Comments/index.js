export default function Comments({ comments = [] }) {
  return (
    <ul>
      {comments.map((comment) => {
        return <li key={comment.id}>{comment.text}</li>;
      })}
    </ul>
  );
}
