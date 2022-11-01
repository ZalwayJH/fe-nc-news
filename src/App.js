import "./App.css";
import { React, useState, useEffect } from "react";
import Header from "./Components/Header";
import ArticleList from "./Components/ArticleList";
import Topics from "./Components/Topics";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [selectTopics, setTopics] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://project-northcoders-nc-news.herokuapp.com/api/topics`)
      .then((res) => res.json())
      .then((data) => {
        const { topics } = data;

        setTopics(topics);
        setLoading(false);
      });
  }, [isLoading]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Topics selectTopics={selectTopics} />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/:topic" element={<ArticleList />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
