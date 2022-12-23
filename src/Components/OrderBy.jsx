import React from "react";
import { Link } from "react-router-dom";
function OrderBy() {
  const orderOptions = ["ASC", "DESC"];

  return (
    <div>
      {" "}
      <ul className="sortByMenu">
        {orderOptions.map((query, index) => {
          return (
            <Link key={index} to={`?order_by=${query}`}>
              <button className="topicLinks" key={index}>
                {query}
              </button>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default OrderBy;
