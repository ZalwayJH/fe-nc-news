import "./App.css";
import { React } from "react";
import Header from "./Components/Header";
import ArticleList from "./Components/ArticleList";
import Topics from "./Components/Topics";
import { useScreenSize } from "./Components/hooks/useScreenSize";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FocusedArticle from "./Components/FocusedArticle";
import SortBy from "./Components/SortBy";

function App() {
  const { isMobile } = useScreenSize();

  return (
    <BrowserRouter>
      <div className="App">
        {isMobile ? <></> : <header>welcome to desktop</header>}
        <Header />
        <h1 className="ArticlesHeader">Articles.</h1>
        <Topics />
        <SortBy />

        <Routes>
          <Route exact path="?sort_by=:query" element={<ArticleList />} />
          <Route exact path="?topic=:topic" element={<ArticleList />} />
          <Route path="/" element={<ArticleList />} />
          <Route path="/article/:articleId" element={<FocusedArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
