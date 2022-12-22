import { useState } from "react";
import React from "react";
import * as API from "../api";
import { AiFillHeart } from "react-icons/ai";

import { ImArrowDown, ImArrowUp } from "react-icons/im";

const Votes = ({ article }) => {
  const [voteIncrement, setVotes] = useState(0);
  const { votes, article_id } = article;

  const handleVoteChange = (number) => {
    setVotes((currentVotes) => currentVotes + number);

    API.patchVotes(article_id, number)
      .then((data) => {})
      .catch((err) => {
        setVotes((currentVotes) => currentVotes - number);
      });
  };

  return (
    <section className="voteSection">
      <div className="focusedVoteCount">
        <AiFillHeart />
        <p className="focusedVoteNumber">{votes + voteIncrement}</p>
      </div>
      <div className="likeButtonContainer">
        <button
          disabled={voteIncrement === 1}
          className="likeButton"
          onClick={() => {
            handleVoteChange(1);
          }}
          aria-label="like button"
        >
          <ImArrowUp className="heartIcon" />
        </button>
        <button
          disabled={voteIncrement === -1}
          className="dislikeButton"
          onClick={() => {
            handleVoteChange(-1);
          }}
          aria-label="dislike button"
        >
          <ImArrowDown className="heartIcon" />
        </button>
      </div>
    </section>
  );
};

export default Votes;
