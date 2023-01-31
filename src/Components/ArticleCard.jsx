import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import FocusedArticle from "./FocusedArticle";
import CommentCount from "./CommentCount";
import LikeCount from "./LikeCount";

const ArticleCard = ({ article }) => {
  const [padding, setPadding] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    container.style.overflow = "hidden";
    const textHeight = container.scrollHeight;

    if (textHeight < 76) {
      setPadding((76 - textHeight) / 2);
    }

    container.style.overflow = "";
  }, []);
  const { body, article_id, comment_count, title, votes } = article;

  return (
    <article className="articles">
      <li loading="lazy" className="ArticleItems">
        <Link
          className="ArticleTitleLink"
          to={`/article/${article_id}`}
          element={<FocusedArticle />}
        >
          <h2
            className="articleTitle"
            ref={containerRef}
            style={{ paddingTop: padding, paddingBottom: padding }}
          >
            {title}
          </h2>
        </Link>
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
    </article>
  );
};

export default ArticleCard;
