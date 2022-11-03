import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const FocusedArticle = () => {
  const { articleId } = useParams();

  const [article, setArticleById] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {
    body,
    article_id,
    author,
    comment_count,
    created_at,
    title,
    topic,
    votes,
  } = article;

  useEffect(() => {
    fetch(
      `https://project-northcoders-nc-news.herokuapp.com/api/articles/${articleId}`
    )
      .then((res) => res.json())
      .then((data) => {
        const article = data;

        setArticleById(article);
        setIsLoading(false);
      });
  }, [articleId]);

  return (
    <article>
      <li loading="lazy" className={"ArticleItems"}>
        <h3>{isLoading ? "Loading.." : <h2 key={article_id}>{title}</h2>}</h3>

        <h3 className="Author">By {author}</h3>
        <section className="BodyBackground">
          <p className="articleBody">{body}</p>
        </section>
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

export default FocusedArticle;
