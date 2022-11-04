const CommentCard = ({ comments }) => {
  const { comment_id, votes, created_at, body, author } = comments;
  return (
    <ul>
      <li loading="lazy">
        <h3>By {author}</h3>
        <section>
          <p className="articleBody" key={comment_id}>
            {body}
          </p>
        </section>
        <p>commentVotes : {votes} </p>
        <p className="Posted: ">{created_at}</p>
      </li>
    </ul>
  );
};

export default CommentCard;
