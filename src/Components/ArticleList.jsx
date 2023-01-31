import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import * as API from "../api";
import { useLocation } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { search } = useLocation();

  useEffect(() => {
    let searchQuery = search;
    if (search === "?topic=") {
      searchQuery = "";
    }
    setIsLoading(true);
    API.getAllArticles(searchQuery)
      .then(({ data }) => {
        const allArticles = data;
        setArticles(allArticles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [search]);

  return (
    <div className="ArticleListContainer">
      <main>
        <>
          {error ? (
            search[1] === "t" ? (
              <h3 className="isLoading">{`${error} - No results for topic "${search.slice(
                7
              )}"`}</h3>
            ) : search[1] === "s" ? (
              <h3 className="isLoading">{`${error} - Cannot sort by "${search.slice(
                9
              )}"`}</h3>
            ) : (
              setError("")
            )
          ) : isLoading ? (
            <h3 className="isLoading">
              <div className="loader"></div>
            </h3>
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
