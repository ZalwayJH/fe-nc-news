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
    setPostedNotification("Comment posted!");
    if (postedNotification) {
      setTimeout(resetPostedNotification, 2000);
    }
  };

  function resetPostedNotification() {
    setPostedNotification("Comment");
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
          ></input>
        </label>
        <button className="postCommentButton" type="submit">
          {postedNotification}
        </button>
      </form>
      <div>
        {previewComment.time !== "" ? (
          <div loading="lazy">
            <h3 className="focusedCommentAuthor">{hardCodedUser}</h3>
            <section className="focusedCommentBody">
              <p>{previewComment.comment}</p>
              <p>Posted: {previewComment.time}</p>
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
