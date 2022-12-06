import { useState } from "react";
import React from "react";
import * as API from "../api";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
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
    <>
      <button
        disabled={voteIncrement === 1}
        className="likeButton"
        onClick={() => {
          handleVoteChange(1);
        }}
        aria-label="like button"
      >
        <AiFillHeart className="heartIcon" />
      </button>
      <p className="voteCounter"> {votes + voteIncrement}</p>
      <button
        disabled={voteIncrement === -1}
        className="dislikeButton"
        onClick={() => {
          handleVoteChange(-1);
        }}
        aria-label="dislike button"
      >
        <AiFillHeart className="heartIcon" />
      </button>
    </>
  );
};

export default Votes;
