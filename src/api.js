import axios from "axios";

const api = axios.create({
  baseURL: "https://odd-blue-foal-gown.cyclic.app/api",
});

export function getAllArticles(searchQuery) {
  return api
    .get(`https://odd-blue-foal-gown.cyclic.app/api/articles${searchQuery}`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
}

export function getArticleById(articleId) {
  return api
    .get(`https://odd-blue-foal-gown.cyclic.app/api/articles/${articleId}`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
}

export function patchVotes(id, voteVal) {
  const voteUpdate = { incr_votes: voteVal };
  return api
    .patch(`/articles/${id}`, voteUpdate)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
}

export function getComments(id) {
  return api
    .get(`/articles/${id}/comments`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw err;
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
    })
    .catch((err) => {
      throw err;
    });
}

export function getTopics() {
  return api
    .get("/topics")
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
}

export function getUsers() {
  return api
    .get("/users")
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
}
