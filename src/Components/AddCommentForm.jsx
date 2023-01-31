import { useState } from "react";
import * as API from "../api";
import { useParams } from "react-router-dom";

const AddCommentForm = () => {
  const [newComment, setComment] = useState("");
  const [postedNotification, setPostedNotification] = useState("Comment");
  const [previewComment, setPreviewComment] = useState({
    user: "",
    comment: "",
    time: "",
  });
  const hardCodedUser = "grumpy19";
  const { articleId } = useParams();
  const currentTime = new Date().toISOString();

  const handleChange = (event) => {
    event.preventDefault();
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setComment(event.target.value);
    setPreviewComment({
      user: hardCodedUser,
      comment: newComment,
      time: currentTime.slice(0, 10).split("-").reverse().join("/"),
    });

    API.addComment(articleId, hardCodedUser, newComment)
      .then(({ data }) => {})
      .catch((err) => {
        return err.msg;
      });

    setComment("");
    setPostedNotification("Posted");
    if (postedNotification) {
      document.getElementById("postCommentButton").style.backgroundColor =
        "#44c088";
      document.getElementById("postCommentButton").style.color = "black";
      setTimeout(resetPostedNotification, 2000);
    }
  };

  function resetPostedNotification() {
    setPostedNotification("Comment");
    document.getElementById("postCommentButton").style.backgroundColor =
      "#373c47";
    document.getElementById("postCommentButton").style.color = "white";
  }

  return (
    <section className="postCommentForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="newComment">
          <input
            id="postComment"
            type="text"
            value={newComment}
            onChange={handleChange}
            required
            className="commentTextField"
            maxLength={400}
            rows={4}
            placeholder="Add a comment"
          ></input>
        </label>

        <button
          id="postCommentButton"
          type="submit"
          className="postCommentButton"
        >
          {postedNotification}
        </button>
        <h4 className="numOfCharsRemaining">{400 - newComment.length}</h4>
      </form>
      <div>
        {previewComment.time !== "" ? (
          <div loading="lazy">
            <h3 className="focusedCommentAuthor">{hardCodedUser}</h3>
            <section className="focusedCommentBody">
              <p className="commentBody">{previewComment.comment}</p>
              <p className="commentPosted">{previewComment.time}</p>
            </section>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default AddCommentForm;
