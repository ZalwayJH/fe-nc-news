import { Link } from "react-router-dom";
import React from "react";

const Topics = ({ selectTopics }) => {
  const allTopics = selectTopics.map((item) => {
    return item.slug;
  });
  allTopics.unshift("Home");
  return (
    <ul className="scrollMenu" id="topicList">
      {allTopics.map((category, index) => {
        return (
          <Link key={index} to={`/${category}`}>
            <li key={index}>{category}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Topics;
