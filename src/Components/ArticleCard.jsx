import { Link } from "react-router-dom";
import FocusedArticle from "./FocusedArticle";
import CommentCount from "./CommentCount";
import LikeCount from "./LikeCount";

const ArticleCard = ({ article }) => {
  const { body, article_id, comment_count, title, votes } = article;

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
            <Link
              className="continueReadingText"
              to={`/article/${article_id}`}
              element={<FocusedArticle />}
            >
              View article
            </Link>

            <CommentCount />
            <LikeCount />
            <h4 className="commentsNumber">{comment_count}</h4>
            <h4 className="likesNumber">{votes}</h4>
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
