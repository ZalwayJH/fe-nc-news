import { useState } from "react";
import * as API from "../api";
import { useParams } from "react-router-dom";

const AddCommentForm = () => {
  const [newComment, setComment] = useState("");
  const [postedNotification, setPostedNotification] = useState("Post Comment");
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
      time: currentTime,
    });

    API.addComment(articleId, hardCodedUser, newComment)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        return err.msg;
      });

    setComment("");
    setPostedNotification(":) POSTED!");
    if (postedNotification) {
      setTimeout(resetPostedNotification, 2000);
    }
  };

  function resetPostedNotification() {
    setPostedNotification("Post Comment");
  }

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="newComment">
          <input
            id="postComment"
            type="text"
            value={newComment}
            onChange={handleChange}
            required
          ></input>
        </label>
        <button type="submit">{postedNotification}</button>
      </form>
      <div>
        {previewComment.time !== "" ? (
          <div loading="lazy" className={"ArticleItems"}>
            <h3 className="Author"> {hardCodedUser}</h3>
            <section className="BodyBackground">
              <p className="articleBody">{previewComment.comment}</p>
              <p className="Date posted">{previewComment.time}</p>
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
