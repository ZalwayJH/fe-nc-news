import React from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

function SortBy({ currentSort }) {
  const nav = useNavigate();

  const options = [
    { value: "created_at", label: "Most recent" },
    { value: "article_id", label: "Article Id" },
    { value: "comment_count", label: "Most comments" },
    { value: "votes", label: "Most Votes" },
  ];

  function handleChange(event) {
    if (event.value === "") {
      nav("");
    } else {
      nav(`?sort_by=${event.value}`);
    }
  }

  const placeholder = options.map((item) =>
    item.value === currentSort ? item.label : null
  );

  return (
    <Select
      value={currentSort}
      className="sortSelector"
      options={options}
      onChange={handleChange}
      placeholder={placeholder}
      autoFocus={true}
      aria-selected={true}
      isSearchable={false}
    />
  );
}

export default SortBy;
