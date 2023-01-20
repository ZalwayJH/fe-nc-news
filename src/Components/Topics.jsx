import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";

const Topics = () => {
  const [selectTopics, setTopics] = useState([""]);
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

  allTopics.unshift("");

  return (
    <div className="TopicsList">
      {isLoading ? (
        <h6 className="isLoadingTopics">Loading Topics</h6>
      ) : (
        <ul style={{ margin: "0px", padding: "0px" }}>
          {allTopics.map((category, index) => {
            return (
              <Link
                key={index}
                className="menuLinks"
                to={category === "" ? "" : `?topic=${category}`}
              >
                <h3 key={index}>
                  {category === ""
                    ? "All"
                    : category[0].toUpperCase() + category.slice(1)}
                </h3>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Topics;
