import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as API from "../api";
import Votes from "./Votes";
import Comments from "./Comments";
import AddCommentForm from "./AddCommentForm";

const FocusedArticle = () => {
  const { articleId } = useParams();
  const [article, setArticleById] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { body, article_id, author, created_at, title, topic } = article;

  useEffect(() => {
    window.scrollTo(0, 0);
    API.getArticleById(articleId).then(({ data }) => {
      const article = data;
      setArticleById(article);
      setIsLoading(false);
    });
  }, [articleId]);

  return (
    <div>
      <>
        {isLoading ? (
          <h3 className="isLoading">
            <div className="loader"></div>
          </h3>
        ) : (
          <article className="focusedArticle">
            <h2 className="focusedArticleTitle" key={article_id}>
              {title}
              <p className="Author">By {author}</p>
            </h2>
            <div className="articleDecoration"></div>
            <p className="focusedArticleBody">
              {body}
              <li className="focusedTopics">#{topic}</li>
            </p>

            <section className="focusedVotingBackground">
              <Votes article={article} />
            </section>
            <p className="focusedDate">
              Published {created_at.slice(0, 10).split("-").reverse().join("/")}
            </p>
            <AddCommentForm />
            <Comments article_id={article_id} />
          </article>
        )}
      </>
    </div>
  );
};

export default FocusedArticle;
