import React, { useState } from "react";

import { Link } from "react-router-dom";

function SortBy() {
  const sortingQuery = ["article_id", "created_at", "comment_count", "votes"];
  const sortList = ["Article Id", "Most recent", "Most comments", "Most Votes"];

  const [isMenuOpen, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!isMenuOpen);
  };

  return (
    <div>
      <button onClick={handleClick}>Sort ˅</button>
      {!isMenuOpen ? (
        <></>
      ) : (
        <div>
          <ul className="SortByDropDown">
            {sortingQuery.map((query, index) => {
              return (
                <Link key={index} to={`?sort_by=${query}`}>
                  <button className="sortMenuButtons" key={index}>
                    {sortList[index]}
                  </button>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortBy;
