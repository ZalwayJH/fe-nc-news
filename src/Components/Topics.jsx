import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";

const Topics = () => {
  const [selectTopics, setTopics] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://odd-blue-foal-gown.cyclic.app/api/topics`)
      .then((res) => res.json())
      .then((data) => {
        const { topics } = data;

        setTopics(topics);
        setLoading(false);
      });
  }, [isLoading]);

  const allTopics = selectTopics.map((item) => {
    return item.slug;
  });
  allTopics.unshift("Home");
  return (
    <ul className="scrollMenu">
      {allTopics.map((category, index) => {
        return (
          <Link className="scrollMenu" key={index} to={`/${category}`}>
            <li key={index}>{category}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Topics;
