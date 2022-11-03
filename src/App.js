import "./App.css";
import { React } from "react";
import Header from "./Components/Header";
import ArticleList from "./Components/ArticleList";
import Topics from "./Components/Topics";
import { useScreenSize } from "./Components/hooks/useScreenSize";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FocusedArticle from "./Components/FocusedArticle";

function App() {
  const { isMobile } = useScreenSize();
  return (
    <BrowserRouter>
      <div className="App">
        {isMobile ? <></> : <header>welcome to desktop</header>}
        <Header />
        <Topics />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/:topic" element={<ArticleList />} />
          <Route path="/article/:articleId" element={<FocusedArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
