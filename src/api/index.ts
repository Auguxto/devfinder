import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
    "Content-Type": "application/json",
  },
});
