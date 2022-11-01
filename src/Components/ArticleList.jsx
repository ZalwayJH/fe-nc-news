import { React, useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    let selectedTopic = "";
    if (topic) {
      selectedTopic = `?topic=${topic}`;
    }
    if (topic === "Home") {
      selectedTopic = "";
    }

    fetch(
      `https://project-northcoders-nc-news.herokuapp.com/api/articles${selectedTopic}`
    )
      .then((res) => res.json())
      .then((data) => {
        const allArticles = data;
        setArticles(allArticles);
      });
  }, [topic]);

  return (
    <main>
      <h2 className={"ArticlesHeader"}>Articles</h2>
      <ul>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} articles={article} />;
        })}
      </ul>
    </main>
  );
};

export default ArticleList;
