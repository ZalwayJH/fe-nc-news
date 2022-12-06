import axios from "axios";

const api = axios.create({
  baseURL: "https://odd-blue-foal-gown.cyclic.app/api",
});

export function patchVotes(id, voteVal) {
  const voteUpdate = { incr_votes: voteVal };
  return api.patch(`/articles/${id}`, voteUpdate).then((data) => {
    return data;
  });
}

export function getComments(id) {
  return api.get(`/articles/${id}/comments`).then((data) => {
    return data;
  });
}

export function addComment(id, user, newComment) {
  return api
    .post(`/articles/${id}/comments`, {
      username: user,
      body: newComment,
    })
    .then((data) => {
      return data;
    });
}
