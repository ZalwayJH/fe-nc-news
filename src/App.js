import "./App.css";
import { React } from "react";
import ArticleList from "./Components/ArticleList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import FocusedArticle from "./Components/FocusedArticle";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="?sort_by=:query" element={<ArticleList />} />
          <Route exact path="?topic=:topic" element={<ArticleList />} />
          <Route path="/" element={<ArticleList />} />
          <Route path="/article/:articleId" element={<FocusedArticle />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
