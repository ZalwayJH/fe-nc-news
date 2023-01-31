import { useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import * as API from "../api";
import Select from "react-select";

const Topics = ({ currentTopic }) => {
  const [isLoading, setLoading] = useState(true);
  const [options, setOptions] = useState([]);

  const nav = useNavigate();

  function handleChange(event) {
    if (event.value === "") {
      nav("");
    } else {
      nav(`?topic=${event.value}`);
    }
  }

  useEffect(() => {
    API.getTopics()
      .then(({ data }) => {
        const { topics } = data;
        setLoading(false);
        if (data) {
          const newOptions = topics.map((item) => {
            return {
              value: item.slug,
              label: item.slug[0].toUpperCase() + item.slug.slice(1),
            };
          });
          newOptions.unshift({ value: "", label: "All" });
          setOptions(newOptions);
        }
      })
      .catch((err) => {
        throw err;
      });
  }, [isLoading]);

  return (
    <Select
      value={currentTopic}
      className="topicSelector"
      isLoading={isLoading}
      options={options}
      onChange={handleChange}
      placeholder={currentTopic}
      noOptionsMessage={({ inputValue }) =>
        !inputValue ? "" : "No results for that topic found"
      }
      aria-selected={true}
    />
  );
};

export default Topics;
