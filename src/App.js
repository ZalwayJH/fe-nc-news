import "./App.css";
import { React } from "react";
import Header from "./Components/Header";
import ArticleList from "./Components/ArticleList";
import Topics from "./Components/Topics";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Topics />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/:topic" element={<ArticleList />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
