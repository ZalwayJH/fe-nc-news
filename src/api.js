import axios from "axios";

const api = axios.create({
  baseURL: "https://project-northcoders-nc-news.herokuapp.com/api",
});

export function patchVotes(id, voteVal) {
  const voteUpdate = { incr_votes: voteVal };
  return api.patch(`/articles/${id}`, voteUpdate).then((data) => {
    return data;
  });
}
