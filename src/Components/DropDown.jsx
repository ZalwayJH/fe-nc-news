import React, { useState } from "react";
import Topics from "./Topics";
import SortBy from "./SortBy";

function DropDown() {
  const [topicsOpen, setTopicsOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div className="dropdown">
      <h3
        className="menuItem"
        onClick={() => {
          setTopicsOpen(!topicsOpen);
          setSortOpen(false);
        }}
      >
        Topics
      </h3>
      {topicsOpen ? <Topics className="topicsPage" /> : null}
      <h3
        className="menuItem"
        onClick={() => {
          setSortOpen(!sortOpen);
          setTopicsOpen(false);
        }}
      >
        Sort by
      </h3>
      {sortOpen ? <SortBy /> : null}
    </div>
  );
}

export default DropDown;
