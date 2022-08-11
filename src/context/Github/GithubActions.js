import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL || "https://api.github.com";

const github = axios.create({
  baseURL: GITHUB_URL,
});
// Get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  let response = await github.get(`/search/users?${params}`);

  return response.data.items;
};
// Get user with login
export const getUser = async (login) => {
  let response = await fetch(`${GITHUB_URL}/users/${login}`);

  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();
    return data;
  }
};
// Get user and repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
