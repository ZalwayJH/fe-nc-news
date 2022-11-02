import { Link } from "react-router-dom";
import FocusedArticle from "./FocusedArticle";

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
        <Link
          className="ArticleTitleLink"
          to={`/article/${article_id}`}
          element={<FocusedArticle singleArticle={articles} />}
        >
          <h2 key={article_id}>{title}</h2>
        </Link>

        <h3 className="Author">By {author}</h3>
        <section className="BodyBackground">
          {" "}
          <p className="articleBody">{body}</p>
        </section>
        <p className="voteCounter">Votes: {votes}</p>
        <h4 className="CommentCount"> View comments: {comment_count}</h4>
        <ul>
          <h4 className="Topics">Topic:</h4>
          <li className="TopicTitle"> {topic}</li>
        </ul>
        <p className="Date">{created_at}</p>
      </li>
    </article>
  );
};

export default ArticleCard;
