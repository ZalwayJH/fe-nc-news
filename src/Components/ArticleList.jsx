import { useEffect } from "react";
import { useState } from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://project-northcoders-nc-news.herokuapp.com/api/articles`)
      .then((res) => res.json())
      .then((data) => {
        const allArticles = data;
        setArticles(allArticles);
      });
  }, []);

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
