export default function Comments({ comments = [] }) {
  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            <div>
              <div>{comment.text}</div>
              <div>{comment.createdAt.toString().substring(0, 21)}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
