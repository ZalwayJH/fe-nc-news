import { Link } from "react-router-dom";
import FocusedArticle from "./FocusedArticle";
import CommentCount from "./CommentCount";
import LikeCount from "./LikeCount";
import Votes from "./Votes";

const ArticleCard = ({ article }) => {
  const { body, article_id, author, comment_count, created_at, title, topic } =
    article;
  const formattedDate = created_at.slice(0, 10);
  return (
    <article className="articles">
      <li loading="lazy" className={"ArticleItems"}>
        <Link
          className="ArticleTitleLink"
          to={`/article/${article_id}`}
          element={<FocusedArticle />}
        >
          <h2 className="articleTitle" key={article_id}>
            {title}
          </h2>
        </Link>
        <div className="articleDecoration"></div>
        {/* <Votes article={article} /> */}
        <section className="BodyBackground">
          <p className="articleBody">{body}</p>
          <div className="InteractArticle">
            <h4>{comment_count}</h4>
            <button className="btn">
              <Link
                className="ViewArticleButton"
                to={`/article/${article_id}`}
                element={<FocusedArticle />}
              >
                View Article
              </Link>
            </button>
            <CommentCount />
            <LikeCount />
          </div>
        </section>
      </li>
      {/* <ul>
          <h4 className="Topics">Topic:</h4>
          <li className="TopicTitle"> {topic}</li>
        </ul>
        <p className="Date">{formattedDate}</p> */}
    </article>
  );
};

export default ArticleCard;
