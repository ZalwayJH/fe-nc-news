import "./App.css";
import { Routes } from "react-router-dom";
import React from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import ArticleList from "./Components/ArticleList";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <ArticleList />
    </div>
  );
}

export default App;
