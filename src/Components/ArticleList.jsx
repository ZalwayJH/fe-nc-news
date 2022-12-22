import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

import { useParams, useLocation } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { search } = useLocation();

  useEffect(() => {
    let searchQuery = search;
    if (search === "?topic=") {
      searchQuery = "";
    }

    fetch(`https://odd-blue-foal-gown.cyclic.app/api/articles${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        const allArticles = data;
        setArticles(allArticles);
        setIsLoading(false);
      });
  }, [topic, search]);

  return (
    <div>
      <main>
        <>
          {isLoading ? (
            <h3 className="isLoading">Loading articles..</h3>
          ) : (
            <ul className="allArticles">
              {articles.map((article) => {
                return (
                  <ArticleCard key={article.article_id} article={article} />
                );
              })}
            </ul>
          )}
        </>
      </main>
    </div>
  );
};

export default ArticleList;
