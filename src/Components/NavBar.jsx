import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Topics from "./Topics";
import SortBy from "./SortBy";

import Header from "./Header";

function NavBar() {
  const { search } = useLocation();
  const [currentTopic, setCurrentTopic] = useState("");
  const [currentSort, setCurrentSort] = useState("");
  const topic = search.slice(7);
  const sort = search.slice(9);

  useEffect(() => {
    if (search.slice(0, 7) === "?topic=") {
      setCurrentTopic(topic[0].toUpperCase() + topic.slice(1));
      setCurrentSort("created_at");
    }
    if (topic === "" || search.slice(0, 9) === "?sort_by=") {
      setCurrentTopic("All");
    }
    if (search.slice(0, 9) === "?sort_by=") {
      setCurrentSort(sort);
    }

    if (sort === "") {
      setCurrentSort("created_at");
    }
  }, [topic, sort, search]);

  return (
    <div>
      <nav className="NavBar">
        <Link className="HomeLink" to="">
          <Header />
        </Link>
        <Topics currentTopic={currentTopic} />
        <SortBy currentSort={currentSort} />
      </nav>
    </div>
  );
}

export default NavBar;
