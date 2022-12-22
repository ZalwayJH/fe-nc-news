import { AiFillHeart } from "react-icons/ai";

const CommentCard = ({ comments }) => {
  const { comment_id, votes, created_at, body, author } = comments;

  return (
    <ul className="commentList">
      <li loading="lazy">
        <h3 className="focusedCommentAuthor">{author}</h3>
        <section className="focusedCommentBody">
          <p key={comment_id} className="commentBody">
            {body}
          </p>
          <div className="focusedVoteCount">
            <AiFillHeart />
            <p className="focusedVoteNumber">{votes}</p>
          </div>
          <p className="commentPosted">
            posted on: {created_at.slice(0, 10).split("-").reverse().join("/")}
          </p>
        </section>
      </li>
    </ul>
  );
};

export default CommentCard;
