import React from "react";
import { Link } from "react-router-dom";

function SortBy() {
  const sortingQuery = ["article_id", "created_at", "comment_count", "votes"];
  const sortList = ["Article Id", "Most recent", "Most comments", "Most Votes"];

  return (
    <div>
      <div>
        <ul style={{ margin: "0px", padding: "0px" }}>
          {sortingQuery.map((query, index) => {
            return (
              <Link className="menuLinks" key={index} to={`?sort_by=${query}`}>
                <h3 key={index}>{sortList[index]}</h3>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SortBy;
