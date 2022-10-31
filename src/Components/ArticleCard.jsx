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

  return <li className={"ArticleItems"}>{body}</li>;
};

export default ArticleCard;
