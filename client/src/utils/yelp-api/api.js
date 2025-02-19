import { API_BASE_URL } from "./config";
import queryString from "query-string";

export function get(path, queryParams) {
  const query = queryString.stringify(queryParams);
  return fetch(`${API_BASE_URL}${path}?${query}`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY_YELP}`,
      Origin: "localhost",
      withCredentials: true,
    },
  });
}
