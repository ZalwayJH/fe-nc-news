const ArticleCard = ({ articles }) => {
  const {
    body,
    article_id,
    author,
    comment_count,
    created_at,
    title,
    topic,
    votes,
  } = articles;

  return (
    <article>
      <li loading="lazy" className={"ArticleItems"}>
        <h2>{title}</h2>
        <h3 className="Author">By {author}</h3>
        <p className="articleBody">{body}</p>
        <h4 className="voteCounter">Votes: {votes}</h4>

        <h4 className="CommentCount"> View comments: {comment_count}</h4>
        <ul>
          <h4 className="Topics">Topic:</h4>
          <li> {topic}</li>
        </ul>
        <p className="Date">{created_at}</p>
      </li>
    </article>
  );
};

export default ArticleCard;
