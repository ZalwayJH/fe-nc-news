import { Link } from "react-router-dom";
import FocusedArticle from "./FocusedArticle";
import Votes from "./Votes";

const ArticleCard = ({ article }) => {
  const { body, article_id, author, comment_count, created_at, title, topic } =
    article;

  return (
    <article>
      <li loading="lazy" className={"ArticleItems"}>
        <Link
          className="ArticleTitleLink"
          to={`/article/${article_id}`}
          element={<FocusedArticle />}
        >
          <h2 key={article_id}>{title}</h2>
        </Link>

        <h3 className="Author">By {author}</h3>
        <section className="BodyBackground">
          <p className="articleBody">{body}</p>
        </section>
        <Votes article={article} />
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
