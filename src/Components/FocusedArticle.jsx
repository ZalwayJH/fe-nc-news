import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Votes from "./Votes";
import Comments from "./Comments";
import AddCommentForm from "./AddCommentForm";

const FocusedArticle = () => {
  const { articleId } = useParams();

  const [article, setArticleById] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { body, article_id, author, created_at, title, topic } = article;

  useEffect(() => {
    fetch(`https://odd-blue-foal-gown.cyclic.app/api/articles/${articleId}`)
      .then((res) => res.json())
      .then((data) => {
        const article = data;

        setArticleById(article);
        setIsLoading(false);
      });
  }, [articleId]);

  return (
    <div>
      <article>
        <li loading="lazy" className={"focusedArticle"}>
          <>{isLoading ? "Loading.." : <h2 key={article_id}>{title}</h2>}</>
          <h3 className="Author">By {author}</h3>
          <section className="BodyBackground">
            <p className="articleBody">{body}</p>
          </section>
          <ul>
            <h4 className="Topics">Topic:</h4>
            <li> {topic}</li>
          </ul>
          <p className="Date">{created_at}</p>
          <Votes article={article} />
        </li>
      </article>
      <AddCommentForm />
      <Comments article_id={article_id} />
    </div>
  );
};

export default FocusedArticle;
