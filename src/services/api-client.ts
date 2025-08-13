import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1cbdb12bb7b94512b3428b28369ff52c",
  },
});

export { CanceledError };
