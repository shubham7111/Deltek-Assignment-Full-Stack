import axios from "axios";

export const api = axios.create({
  baseURL: "/api/Contact", // or whatever your .NET backend URL is
});
