import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../api";
import CommentCard from "./CommentCard";

const Comments = () => {
  const { articleId } = useParams();
  const [currentComments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    API.getComments(articleId)
      .then(({ data }) => {
        setComments(data);
        setIsLoading(false);
      })
      .catch((err) => {});
  }, [articleId]);

  return (
    <section className={"ArticleItems"}>
      <ul>
        {isLoading ? (
          <p> loading comments..</p>
        ) : (
          currentComments.map((articleComments) => {
            return (
              <CommentCard
                key={articleComments.comment_id}
                comments={articleComments}
              />
            );
          })
        )}
      </ul>
    </section>
  );
};

export default Comments;
